import React from 'react';
import TopMenu from '../TopMenu';
import NoteList from '../NoteList';

const Main = ({ user, onLogOutClick }) => {
  // TODO: Replace that wrapping div with a Fragment as 
  // soon as CRA supports it
  return <div>
    <TopMenu user={user} onLogOutClick={onLogOutClick} />
    <div className="ui grid">
      <div className="ui column four wide">
        <NoteList />
      </div>
      <div className="ui column twelve wide">
        <p>hello world</p>
      </div>
    </div>
  </div>
};
 
export default Main;