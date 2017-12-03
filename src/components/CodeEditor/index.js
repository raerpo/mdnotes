import React from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

const CodeEditor = () => {
  const options = {
    lineNumbers: true,
    mode: 'markdown'
  };
  const handleChange = (content) => {
    
  };
  return <CodeMirror 
    value={''} 
    options={options} 
    onChange={handleChange} 
  />
}
 
export default CodeEditor;