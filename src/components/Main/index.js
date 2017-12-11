import React from 'react';
import TopMenu from '../TopMenu';
import NoteList from '../NoteList';
import NoteActions from '../NoteActions';
import CodeEditor from '../CodeEditor';

const Main = ({ user, onLogOutClick, addNewNote, filterNotes, paramToSearch, deleteNote, noteListData, setActiveNote, activeNote, changeNote }) => {
  const getNoteContent = () => {
    if (!noteListData) return null;
    const noteData = noteListData[activeNote];
    return noteData.content;
  }
  // TODO: Replace that wrapping div with a Fragment as 
  // soon as CRA supports it
  return <div>
    <TopMenu user={user} onLogOutClick={onLogOutClick} />
    <div className="ui grid main">
      <div className="ui column four wide sidemenu">
        <NoteActions addNewNote={addNewNote} filterNotes={filterNotes}/>
        <NoteList
          noteListData={noteListData}
          setActiveNote={setActiveNote}
          activeNote={activeNote}
          deleteNote={deleteNote}
          paramToSearch={paramToSearch}
        />
      </div>
      <div className="ui column twelve wide">
        <CodeEditor
          content={getNoteContent()}
          changeNote={changeNote}
          activeNote={activeNote}
        />
      </div>
    </div>
  </div>
};

export default Main;