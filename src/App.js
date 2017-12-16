import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import uuid from "uuid";
import Home from "./scenes/Home";
import Main from "./scenes/Main";
import LoadingScreen from "./components/LoadingScreen";
import * as routes from "./constants/routes";
import { auth, database, githubAuthProvider } from "./config/firebase";
import { getNoteTitle } from "./utils/notes";

export class App extends Component {
  state = {
    user: null,
    activeNote: null,
    isLogginIn: false,
    noteListData: {},
    paramToSearch: ""
  };

  componentDidMount() {
    // Show the loading screen
    this.setState({
      loadingDataFromServer: true
    });

    auth.onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loadingDataFromServer: false
        });
      } else {
        database.ref(`/user/${user.uid}`).on("value", snapshot => {
          this.handleDataChange(snapshot, user);
        });
      }
    });
  }

  onLogInWithGithub = () => {
    this.setState(
      {
        isLogginIn: true
      },
      () => {
        auth.signInWithPopup(githubAuthProvider).then(() => {
          this.setState({
            isLogginIn: false
          });
        });
      }
    );
  };

  onLogOutClick = () => {
    auth.signOut().then(() => {
      document.location.reload();
    });
  };

  getActiveNote = (dataNotes, currentActiveNote) => {
    if (!dataNotes) return null;
    const notesKeys = Object.keys(dataNotes);
    if (notesKeys.length === 0) return null;
    const activeNoteInNotesKeys = notesKeys.indexOf(currentActiveNote) > -1;
    return activeNoteInNotesKeys ? currentActiveNote : notesKeys[0];
  };

  // This method will run everytime the data in firebase is change
  handleDataChange = (snapshot, user) => {
    const activeNote = this.getActiveNote(
      snapshot.val(),
      this.state.activeNote
    );
    this.setState({
      user,
      activeNote,
      noteListData: snapshot.val(),
      loadingDataFromServer: false
    });
  };

  addNewNote = () => {
    const userId = this.state.user.uid;
    const noteId = uuid.v4();
    database.ref(`/user/${userId}/${noteId}`).set({
      title: getNoteTitle(),
      content: "",
      lastModified: new Date().getTime()
    });
  };

  filterNotes = e => {
    const param = e.target.value;
    this.setState({ paramToSearch: param });
  };

  deleteNote = noteId => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).remove();
  };

  setActiveNote = activeNote => {
    if (!activeNote) {
      const notesKeys = this.state.noteListData;
      this.setState({
        activeNote: notesKeys.length > 0 ? notesKeys[0] : null
      });
    } else {
      this.setState({
        activeNote
      });
    }
  };

  changeNote = (content, noteId) => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).update({
      "/content": content,
      "/title": getNoteTitle(content)
    });
  };

  onChangeTags = ev => {
    const userId = this.state.user.uid;
    const { activeNote } = this.state;
    const tags = ev.target.value;
    database.ref(`/user/${userId}/${activeNote}`).update({
      "/tags": tags
    });
  };

  render() {
    const {
      isLogginIn,
      user,
      loadingDataFromServer,
      noteListData,
      activeNote,
      paramToSearch
    } = this.state;
    const isLogIn = user !== null;
    if (loadingDataFromServer) {
      return <LoadingScreen />;
    }
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path={routes.HOME}
            render={() =>
              isLogIn ? (
                <Redirect to={routes.MAIN} />
              ) : (
                <Home
                  isLogginIn={isLogginIn}
                  onlogInWithGithub={this.onLogInWithGithub}
                />
              )
            }
          />
          <Route
            path={routes.MAIN}
            render={() =>
              isLogIn ? (
                <Main
                  user={user}
                  noteListData={noteListData}
                  paramToSearch={paramToSearch}
                  addNewNote={this.addNewNote}
                  filterNotes={this.filterNotes}
                  deleteNote={this.deleteNote}
                  changeNote={this.changeNote}
                  setActiveNote={this.setActiveNote}
                  onLogOutClick={this.onLogOutClick}
                  activeNote={activeNote}
                  onChangeTags={this.onChangeTags}
                />
              ) : (
                <Redirect to={routes.HOME} />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
