import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import Home from '../Home';
import Main from '../Main';
import LoadingScreen from '../LoadingScreen';
import * as routes from '../../constants/routes';
import { auth, database, githubAuthProvider } from '../../config/firebase';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      activeNote: null,
      isLogginIn: false
    }
  }
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
        database.ref(`/user/${user.uid}`).on('value', (snapshot) => {
          this.setState({
            user,
            noteListData: snapshot.val(),
            // Set the first note as active by default when there isn't any note
            activeNote: this.state.activeNote || (snapshot.val() && Object.keys(snapshot.val())[0]),
            loadingDataFromServer: false
          });
        });
      }
    });
  }

  onLogInWithGithub = () => {
    this.setState({
      isLogginIn: true
    }, () => {
      auth
        .signInWithPopup(githubAuthProvider)
        .then(() => {
          this.setState({
            isLogginIn: false
          })
        });
    });
  }

  onLogOutClick = () => {
    auth.signOut().then(() => {
      document.location.reload();
    });
  }

  addNewNote = () => {
    const userId = this.state.user.uid;
    const noteId = uuid.v4();
    const defaultNote = '# This is the title of your new note';
    const titleDefaultLength = 20;
    database.ref(`/user/${userId}/${noteId}`).set({
      title: defaultNote.slice(0, titleDefaultLength),
      content: defaultNote,
      lastModified: new Date().getTime()
    });
  }

  deleteNote = (noteId) => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).remove();
  }

  setActiveNote = (activeNote) => {
    this.setState({
      activeNote
    });
  }

  changeNote = (content, noteId) => {
    const userId = this.state.user.uid;
    database.ref(`/user/${userId}/${noteId}`).update({'/content': content});
  }

  render() {
    const { isLogginIn, user, loadingDataFromServer, noteListData, activeNote } = this.state;
    const isLogIn = user !== null;
    if (loadingDataFromServer) {
      return <LoadingScreen />
    }
    return (<Router>
      <div className="app">
        <Route exact path={routes.HOME} render={() => isLogIn ? <Redirect to={routes.MAIN} /> : <Home isLogginIn={isLogginIn} onlogInWithGithub={this.onLogInWithGithub} />} />
        <Route 
          path={routes.MAIN} 
          render={() => isLogIn ? 
            <Main
              user={user}
              noteListData={noteListData}
              addNewNote={this.addNewNote}
              deleteNote={this.deleteNote}
              changeNote={this.changeNote}
              setActiveNote={this.setActiveNote}
              onLogOutClick={this.onLogOutClick}
              activeNote={activeNote}
            /> : <Redirect to={routes.HOME} />} />
      </div>
    </Router>)
  }
}

export default App;