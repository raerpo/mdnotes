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
    console.log('adding new note');
    const userId = this.state.user.uid;
    const noteId = uuid.v4();
    const defaultNote = '# This is the title of your new note';
    const titleDefaultLength = 20;
    database.ref(`/user/${userId}/${noteId}`).set({
      title: defaultNote.slice(0, titleDefaultLength),
      note: defaultNote,
      lastModified: new Date().getTime()
    });
  }
  render() {
    const { isLogginIn, user, loadingDataFromServer, noteListData } = this.state;
    const isLogIn = user !== null;
    if (loadingDataFromServer) {
      return <LoadingScreen />
    }
    return (<Router>
      <div className="app">
        <Route exact path={routes.HOME} render={() => isLogIn ? <Redirect to={routes.MAIN} /> : <Home isLogginIn={isLogginIn} onlogInWithGithub={this.onLogInWithGithub} />} />
        <Route path={routes.MAIN} render={() => isLogIn ? <Main user={user} noteListData={noteListData} addNewNote={this.addNewNote} onLogOutClick={this.onLogOutClick} /> : <Redirect to={routes.HOME} />} />
      </div>
    </Router>)
  }
}

export default App;