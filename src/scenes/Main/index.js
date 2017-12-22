import React from 'react';
import TopMenu from 'components/TopMenu';
import NoteList from './components/NoteList';
import NoteActions from './components/NoteActions';
import CodeEditor from './components/CodeEditor';
import Toolbar from './components/Toolbar';

const Main = ({
  user,
  onLogOutClick,
  addNewNote,
  filterNotes,
  paramToSearch,
  deleteNote,
  noteListData,
  setActiveNote,
  activeNote,
  changeNote,
  onChangeTags,
  publishNote,
  unpublishNote,
  isPublic,
}) => {
  const getNoteContent = () => {
    if (!noteListData) return null;
    const noteData = noteListData[activeNote];
    return noteData.content;
  };
  const getNote = () => {
    if (!noteListData) return null;
    const noteData = noteListData[activeNote];
    return noteData;
  };
  const getNoteTags = () => {
    if (!noteListData) return '';
    const noteData = noteListData[activeNote];
    return noteData.tags;
  };
  // TODO: Replace that wrapping div with a Fragment as
  // soon as CRA supports it
  return (
    <div>
      <TopMenu user={user} onLogOutClick={onLogOutClick} />
      <div className="ui grid main">
        <div className="ui column four wide sidemenu">
          <NoteActions
            addNewNote={addNewNote}
            filterNotes={filterNotes}
            paramToSearch={paramToSearch}
          />
          <NoteList
            noteListData={noteListData}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
            deleteNote={deleteNote}
            paramToSearch={paramToSearch}
          />
        </div>
        <div className="ui column twelve wide">
          <Toolbar
            onChangeTags={onChangeTags}
            tags={getNoteTags()}
            activeNote={activeNote}
            note={getNote()}
            isPublic={isPublic}
            publishNote={publishNote}
            unpublishNote={unpublishNote}
          />
          <CodeEditor
            content={getNoteContent()}
            changeNote={changeNote}
            activeNote={activeNote}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
