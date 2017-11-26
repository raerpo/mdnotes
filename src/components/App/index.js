import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { auth } from '../../config/firebase';
import Home from '../Home';
import Main from '../Main';
import * as routes from '../../constants/routes';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        user
      });
    });
  }
  render() { 
    const isLogIn = this.state.user !== null;
    return ( <Router>
      <div className="app">
        <Route exact path={routes.HOME} render={ () => isLogIn ? <Redirect to={routes.MAIN} /> : <Home />} />
        <Route path={routes.MAIN} render={() => isLogIn ? <Main user={this.state.user} /> : <Redirect to={routes.HOME} /> } />
      </div>
    </Router> )
  }
}
 
export default App;