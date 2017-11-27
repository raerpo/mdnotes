import React from 'react';
import TopMenu from '../TopMenu';

const Main = ({ user, onLogOutClick }) => {
  return <div>
    <TopMenu user={user} onLogOutClick={onLogOutClick} />
  </div>
};
 
export default Main;