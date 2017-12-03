import React from 'react';

const Search = () => {
  return (
    <div className="actions">
      <div className="search">
        <div className="ui icon input fluid">
          <i className="search icon"></i>
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="note-actions">
        <div class="ui small basic icon buttons">
          <button class="ui button" title="Download Notes"><i class="download icon"></i></button>
          <button class="ui button" title="New note"><i class="plus icon"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Search;


