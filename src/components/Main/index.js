import React from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { HOME } from '../../constants/routes';

const Main = withRouter(({ history }) => {
  const onLogOutClick = () => {
    auth.signOut().then(() => {history.push(HOME)});
  }
  return <div>
    <h2>Main application</h2>
    <button onClick={onLogOutClick}>Log out</button>
  </div>
});
 
export default Main;