import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import uuid from "uuid";
import Home from "./scenes/Home";
import Main from "./scenes/Main";
import Public from "./scenes/Public";
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
    paramToSearch: "",
    isPublic: false
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

  componentDidUpdate() {
    if (!this.state.activeNote) return false;
    const { activeNote, noteListData } = this.state;
    const activeNoteTitle = noteListData[activeNote] ? noteListData[activeNote].title : '';
    document.title = `MDNotes - ${activeNoteTitle}`;
  }

  onLogInWithGithub = () => {
    this.setState(
      {
        isLogginIn: true
      },
      () => {
        auth.signInWithRedirect(githubAuthProvider).then(() => {
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
    // Clear search term when adding a new note
    this.clearParamToSearch();
    database.ref(`/user/${userId}/${noteId}`).set({
      title: getNoteTitle(),
      content: "",
      lastModified: new Date().getTime()
    }).then(() => {
      this.setActiveNote(noteId);
    });
  };

  filterNotes = e => {
    const param = e.target.value;
    this.setState({ paramToSearch: param });
  };

  deleteNote = noteId => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).remove();
    database.ref(`/public/${noteId}`).remove();
  };

  // This method runs when the user clicks on a note
  setActiveNote = activeNote => {
    if (!activeNote) {
      const notesKeys = this.state.noteListData;
      this.setState({
        activeNote: notesKeys.length > 0 ? notesKeys[0] : null
      });
    } else {
      this.setState({ activeNote }, () => {
        this.checkIfNoteIsPublic(activeNote);
      });
    }
  };

  changeNote = (content, noteId) => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).update({
      "/content": content,
      "/title": getNoteTitle(content),
      "/lastModified": new Date().getTime()
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

  checkIfNoteIsPublic = noteId => {
    database
      .ref(`/public/${noteId}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          isPublic: snapshot.val() !== null
        });
      });
  };

  publishNote = (activeNote, note) => {
    const { title, content, lastModified } = note;
    database
      .ref(`/public/${activeNote}`)
      .set({
        title,
        content,
        lastModified
      })
      .then(() => {
        this.setState({
          isPublic: true
        });
      });
  };

  unpublishNote = activeNote => {
    database
      .ref(`/public/${activeNote}`)
      .remove()
      .then(() => {
        this.setState({
          isPublic: false
        });
      });
  };

  clearParamToSearch = () => {
    this.setState({
      paramToSearch: ''
    });
  }

  render() {
    const {
      isLogginIn,
      user,
      loadingDataFromServer,
      noteListData,
      activeNote,
      paramToSearch,
      isPublic
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
                  isPublic={isPublic}
                  publishNote={this.publishNote}
                  unpublishNote={this.unpublishNote}
                />
              ) : (
                <Redirect to={routes.HOME} />
              )
            }
          />
          <Route
            path={`${routes.PUBLIC}/:noteId`}
            render={routeProps => <Public {...routeProps} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
