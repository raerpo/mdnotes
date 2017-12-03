import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const NoteList = ({ noteListData }) => {

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
      return (<div className="item" key={key}>
        <div className="content">
          <a className="header">{title}</a>
          <small className="description">Last modification: {lastModifiedFormated}</small>
        </div>
      </div>)
    });
  }

  return (
    <div className="ui celled big list">
      {renderNodeList(noteListData)}
    </div>
  )
}

export default NoteList;