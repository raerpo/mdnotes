import React from 'react';
import CodeMirror from 'react-codemirror';
import debounce from 'lodash/debounce';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

const CodeEditor = ({ content, changeNote, activeNote }) => {
  const options = {
    lineNumbers: true,
    mode: 'markdown'
  };
  const handleChange = (content) => {
    //debounce(changeNote(content, activeNote), 1000);
    changeNote(content, activeNote);
  };
  return (
    <CodeMirror 
      value={content} 
      options={options} 
      onChange={handleChange} 
    />
  );
}
 
export default CodeEditor;