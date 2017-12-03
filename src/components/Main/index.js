import React from 'react';
import TopMenu from '../TopMenu';
import NoteList from '../NoteList';
import NoteActions from '../NoteActions';
import CodeEditor from '../CodeEditor';

const Main = ({ user, onLogOutClick, addNewNote, noteListData }) => {
  // TODO: Replace that wrapping div with a Fragment as 
  // soon as CRA supports it

  return <div>
    <TopMenu user={user} onLogOutClick={onLogOutClick} />
    <div className="ui grid main">
      <div className="ui column four wide sidemenu">
        <NoteActions addNewNote={addNewNote} />
        <NoteList noteListData={noteListData} />
      </div>
      <div className="ui column twelve wide">
        <CodeEditor />
      </div>
    </div>
  </div>
};
 
export default Main;