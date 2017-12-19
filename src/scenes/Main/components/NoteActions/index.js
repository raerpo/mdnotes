import React from "react";

const Search = ({ addNewNote, filterNotes, paramToSearch }) => {
  return (
    <div className="actions">
      <div className="search">
        <div className="ui icon input fluid">
          <i className="search icon" />
          <input
            placeholder="Search..."
            type="text"
            onChange={filterNotes}
            value={paramToSearch}
          />
        </div>
      </div>
      <div className="note-actions">
        <div className="ui small basic icon buttons">
          <button className="ui button" title="New note" onClick={addNewNote}>
            <i className="plus icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
