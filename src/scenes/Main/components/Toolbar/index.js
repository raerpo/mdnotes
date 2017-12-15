import React from "react";
import "./styles.css";

const Toolbar = ({ onChangeTags, tags = "" }) => {
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
        <button class="ui labeled icon button">
          <i class="upload icon"></i>
          Publish
        </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
