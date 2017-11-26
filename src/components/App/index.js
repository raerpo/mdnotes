import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Main from '../Main';
import * as routes from '../../constants/routes';
import { auth, githubAuthProvider } from '../../config/firebase';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLogginIn: false
    }
    this.onLogInWithGithub = this.onLogInWithGithub.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        user
      });
    });
  }
  onLogInWithGithub() {
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
  render() {
    const { isLogginIn, user } = this.state;
    const isLogIn = user !== null;
    return (<Router>
      <div className="app">
        <Route exact path={routes.HOME} render={() => isLogIn ? <Redirect to={routes.MAIN} /> : <Home isLogginIn={isLogginIn} onlogInWithGithub={this.onLogInWithGithub} />} />
        <Route path={routes.MAIN} render={() => isLogIn ? <Main user={user} /> : <Redirect to={routes.HOME} />} />
      </div>
    </Router>)
  }
}

export default App;