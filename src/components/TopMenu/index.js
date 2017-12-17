import React from "react";
import { Link } from 'react-router-dom';
import * as routes from "constants/routes";

const TopMenu = ({ user, onLogOutClick }) => {
  const getUserInformation = () => {
    return user ? (
      <div className="item">
        <img
          className="ui avatar image"
          src={user.photoURL}
          alt={user.displayName}
        />
        <span>{user.displayName || user.email}</span>
      </div>
    ) : null;
  };
  const getTopMenuActions = () => {
    return user ? (
      <div className="item">
        <div className="ui button negative" onClick={onLogOutClick}>
          Log out
        </div>
      </div>
    ) : null;
  };
  return (
    <div className="ui menu">
      <div className="item logo">
        <Link to={routes.HOME}>
          <img src="/mdnotes.png" alt="MDNotes" className="ui" />
        </Link>
      </div>
      <div className="menu right">
        {getUserInformation()}
        {getTopMenuActions()}
      </div>
    </div>
  );
};

export default TopMenu;
