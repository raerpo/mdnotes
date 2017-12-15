import React from 'react';

const Search = ({ addNewNote, filterNotes }) => {
  return (
    <div className="actions">
      <div className="search">
        <div className="ui icon input fluid">
          <i className="search icon"></i>
          <input placeholder="Search..." type="text" onKeyUp={filterNotes}/>
        </div>
      </div>
      <div className="note-actions">
        <div className="ui small basic icon buttons">
          <button className="ui button" title="New note" onClick={addNewNote}><i className="plus icon"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Search;


