import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import cx from 'classnames';
import { firebaseObjectToArray } from 'utils/notes';

const NoteList = ({
  noteListData,
  setActiveNote,
  activeNote,
  deleteNote,
  paramToSearch,
}) => {
  const renderEmpty = () => (
    <div className="item">
      <p>Nothing to show here. Click on the add button to add a new note</p>
    </div>
  );

  const filterNoteListBySearch = notesData => firebaseObjectToArray(notesData).filter((note) => {
    const searchInTitle = note.title.toLowerCase().indexOf(paramToSearch.toLowerCase()) > -1;
    const searchInTags = note.tags ? note.tags.toLowerCase().indexOf(paramToSearch.toLowerCase()) > -1 : false;
    return searchInTitle || searchInTags;
  });

  const renderNodeList = (notesData) => {
    const noteArray = filterNoteListBySearch(notesData);
    if (noteArray.length === 0) return renderEmpty();
    return noteArray.map((note) => {
      const { title, lastModified, id } = note;
      const lastModifiedFormated = distanceInWordsToNow(new Date(lastModified));
      const handleSelectNote = () => {
        setActiveNote(id);
      };
      const handleDeleteNote = (e) => {
        e.stopPropagation();
        deleteNote(id);
      };
      const noteClasses = cx('item', { active: id === activeNote });
      return (
        <div className={noteClasses} key={id} onClick={handleSelectNote}>
          <button
            className="ui mini red right floated button delete-note"
            onClick={handleDeleteNote}
          >
            Delete
          </button>
          <div className="content">
            <a className="header">{title}</a>
            <small className="description">
              Last modification: {lastModifiedFormated}
            </small>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui celled big list">{renderNodeList(noteListData)}</div>
  );
};

export default NoteList;
