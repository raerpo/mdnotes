import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import cx from 'classnames';

const NoteList = ({ noteListData, setActiveNote, activeNote, deleteNote }) => {

  const renderEmpty = () => {
    return (
      <div className="item">
        <p>Nothing to show here. Click on the add button to add a new note</p>
      </div>
    );
  }

  const renderNodeList = (noteListData) => {
    if (!noteListData) return renderEmpty();
    const keys = Object.keys(noteListData);
    return keys.map(key => {
      const { title, lastModified } = noteListData[key];
      const lastModifiedFormated = distanceInWordsToNow(new Date(lastModified));
      const handleSelectNote = () => { setActiveNote(key) };
      const handleDeleteNote = () => { deleteNote(key) };
      const noteClasses = cx('item', {'active': key === activeNote });
      return (
        <div className={noteClasses} key={key}>
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