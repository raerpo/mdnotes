import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Main from '../Main';
import LoadingScreen from '../LoadingScreen';
import * as routes from '../../constants/routes';
import { auth, githubAuthProvider } from '../../config/firebase';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLogginIn: false
    }
  }
  componentDidMount() {
    this.setState({
      loadingDataFromServer: true
    });
    auth.onAuthStateChanged(user => {
      this.setState({
        user,
        loadingDataFromServer: false
      });
    });
  }
  onLogInWithGithub = () => {
    this.setState({
      isLogginIn: true
    }, () => {
      auth
        .signInWithRedirect(githubAuthProvider)
        .then(() => {
          this.setState({
            isLogginIn: false
          })
        });
    });
  }
  onLogOutClick = () => {
    auth.signOut();
  }
  render() {
    const { isLogginIn, user, loadingDataFromServer } = this.state;
    const isLogIn = user !== null;
    if (loadingDataFromServer) {
      return <LoadingScreen />
    }
    return (<Router>
      <div className="app">
        <Route exact path={routes.HOME} render={() => isLogIn ? <Redirect to={routes.MAIN} /> : <Home isLogginIn={isLogginIn} onlogInWithGithub={this.onLogInWithGithub} />} />
        <Route path={routes.MAIN} render={() => isLogIn ? <Main user={user} onLogOutClick={this.onLogOutClick} /> : <Redirect to={routes.HOME} />} />
      </div>
    </Router>)
  }
}

export default App;