import React from 'react';

const TopMenu = ({ user, onLogOutClick }) => {
  return <div className="ui menu">
    <div className="item">
      <img src="/mdnotes.png" alt="MDNotes" />
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
}
 
export default TopMenu;