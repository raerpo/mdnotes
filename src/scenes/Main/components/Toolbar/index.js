import React from "react";
import "./styles.css";

const Toolbar = ({ onChangeTags, tags = "", togglePublishNote, activeNote, note }) => {
  const handleTogglePublishNote = () => {
    togglePublishNote(activeNote, note);
  }
  return (
    <div className="ui toolbar">
      <div className="ui right left icon input fluid">
        <i className="tags icon" />
        <input
          placeholder="Enter tags separated by commas"
          type="text"
          onChange={onChangeTags}
          value={tags}
        />
      </div>
      <div className="note-actions">
        <div className="ui small basic icon buttons">
        <button className="ui labeled icon button" onClick={handleTogglePublishNote}>
          <i className="upload icon"></i>
          Publish
        </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
