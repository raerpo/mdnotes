import React from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

const CodeEditor = () => {
  const options = {
    lineNumbers: true,
    mode: 'markdown'
  };
  const defaultText = '# This is the title of your new note';
  const handleChange = (content) => {
    
  };
  return <CodeMirror 
    value={defaultText} 
    options={options} 
    onChange={handleChange} 
  />
}
 
export default CodeEditor;