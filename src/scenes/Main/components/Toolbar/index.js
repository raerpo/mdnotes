import React from "react";
import { PUBLIC } from "constants/routes";
import cx from "classnames";
import "./styles.css";

const Toolbar = ({
  onChangeTags,
  tags = "",
  publishNote,
  unpublishNote,
  activeNote,
  note,
  isPublic
}) => {
  const handlePublishNote = () => {
    publishNote(activeNote, note);
  };
  const handleUnpublishNote = () => {
    unpublishNote(activeNote);
  };
  const handleFocus = evt => {
    evt.target.select();
  };
  const renderPublishActions = () => {
    return isPublic && activeNote ? (
      <div
        className={cx("ui right labeled left icon input", {
          disabled: !activeNote
        })}
      >
        <i className="upload icon" />
        <input
          type="text"
          value={`${window.location.origin}${PUBLIC}/${activeNote}`}
          readOnly
          onClick={handleFocus}
        />
        <a className="ui tag label" onClick={handleUnpublishNote}>
          Unpublish
        </a>
        <button
          class="ui icon button refresh"
          title="refresh published note"
          onClick={handlePublishNote}
        >
          <i class="refresh icon" />
        </button>
      </div>
    ) : (
      <div className="ui small basic icon buttons">
        <button
          className={cx("ui labeled icon button", { disabled: !activeNote })}
          onClick={handlePublishNote}
        >
          <i className="upload icon" />
          Publish
        </button>
      </div>
    );
  };
  return (
    <div className="ui toolbar">
      <div
        className={cx("ui right left icon input fluid", {
          disabled: !activeNote
        })}
      >
        <i className="tags icon" />
        <input
          placeholder="Enter tags separated by commas"
          type="text"
          onChange={onChangeTags}
          value={tags}
        />
      </div>
      <div className="note-actions">{renderPublishActions()}</div>
    </div>
  );
};

export default Toolbar;
