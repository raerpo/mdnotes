import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogInPage from 'components/LogInPage';
import { injectGlobal } from 'styled-components';
import { auth, githubAuthProvider } from 'config/firebase';
import { colors } from './ui-components/constants';

injectGlobal`
  body {
    margin: 0px;
    font-size: 16px;
    font-family: arial;
    background-color: ${colors.background};
    color: ${colors.textColor}
  }
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: {} }
  }

  componentDidMount() {
    
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
    return (<div>
      <LogInPage handleLogin={this.handleLogin} />
    </div>);
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
