import React from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { HOME } from '../../constants/routes';

const Main = withRouter(({ history, user }) => {
  console.log(user);
  const onLogOutClick = () => {
    auth.signOut().then(() => {history.push(HOME)});
  }
  return <div className="ui menu">
    <div className="item">
      <h2>MDNotes</h2>
    </div>
    <div className="menu right">
      <div className="item">
        <img className="ui avatar image" src={user.photoURL} alt={user.displayName} />
        <span>{ user.displayName }</span>
      </div>
      <div className="item">
        <div className="ui button negative" onClick={onLogOutClick}>Log out</div>
      </div>
    </div>
  </div>
});
 
export default Main;