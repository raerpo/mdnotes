import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import cx from 'classnames';
import { firebaseObjectToArray } from '../../utils/notes';

const NoteList = ({ noteListData, setActiveNote, activeNote, deleteNote }) => {

  const renderEmpty = () => {
    return (
      <div className="item">
        <p>Nothing to show here. Click on the add button to add a new note</p>
      </div>
    );
  }

  const renderNodeList = (noteListData) => {
    const noteArray = firebaseObjectToArray(noteListData);
    if (noteArray.length === 0) return renderEmpty();
    return noteArray.map(note => {
      const { title, lastModified, id } = note;
      const lastModifiedFormated = distanceInWordsToNow(new Date(lastModified));
      const handleSelectNote = () => { setActiveNote(id) };
      const handleDeleteNote = () => { deleteNote(id) };
      const noteClasses = cx('item', {'active': id === activeNote });
      return (
        <div className={noteClasses} key={id}>
          <button className="ui mini red right floated button delete-note" onClick={handleDeleteNote}>Delete</button>
          <div className="content" onClick={handleSelectNote}>
            <a className="header">{title}</a>
            <small className="description">Last modification: {lastModifiedFormated}</small>
          </div>
        </div>
      )
    });
  }

  return (
    <div className="ui celled big list">
      {renderNodeList(noteListData)}
    </div>
  )
}

export default NoteList;