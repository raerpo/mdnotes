import React from 'react';
import { auth, githubAuthProvider } from '../../config/firebase';

const Home = () => {
  const logInWIthGithub = () => {
    auth.signInWithRedirect(githubAuthProvider);
  }
  return <div>
    Home Page
    <div className="ui animated button" tabindex="0" onClick={logInWIthGithub}>
      <div className="visible content">Login with Github</div>
      <div className="hidden content">
        <i className="right github icon"></i>
      </div>
    </div>
  </div>
}
 
export default Home;