import React from "react";
import "./styles.css";

const Toolbar = ({ onChangeTags, tags = ''}) => {
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
    </div>
  );
};

export default Toolbar;
