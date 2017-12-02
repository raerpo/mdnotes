import React from 'react';
import TopMenu from '../TopMenu';

const Main = ({ user, onLogOutClick }) => {
  // TODO: Replace that wrapping div with a Fragment as 
  // soon as CRA supports it
  return <div>
    <TopMenu user={user} onLogOutClick={onLogOutClick} />
  </div>
};
 
export default Main;