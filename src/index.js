import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogInPage from 'components/LogInPage';
import { injectGlobal } from 'styled-components';
import { auth, githubAuthProvider } from 'config/firebase';

injectGlobal`
  body {
    margin: 0px;
    font-size: 16px;
    font-family: arial;
  }
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: {} }
  }

  handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(githubAuthProvider).then((res) => {
      // res contains user data 
      const { displayName, email } = res.user;
      const userData = {
        displayName,
        email
      };
      this.setState({
        userData
      })
    });
  }

  render() {
    const { displayName, email } = this.state.userData;

    return ( <div>
      <p>{`${displayName} - ${email}`}</p>
      <LogInPage handleLogin={this.handleLogin}/>
    </div> );
  }
}
 
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
