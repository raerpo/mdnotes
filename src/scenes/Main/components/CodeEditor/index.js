import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import uuid from 'uuid';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

const options = {
  lineNumbers: true,
  lineWrapping: true,
  indentUnit: 2,
  mode: 'markdown'
};

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }
  componentDidMount() {
    this.setState({
      content: this.props.content
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.content !== this.state.console) {
      this.setState({
        content: nextProps.content
      })
    }
  }
  handleChange = (e) => {
    const { changeNote, activeNote } = this.props;
    // When the note list is empty and the user start typing a new
    // note, activeNote is going to be null. We create a new noteId
    // to create a new note from here
    changeNote(this.state.content, activeNote || uuid.v4());
  }
  render() {
    return (
      <CodeMirror
        value={this.state.content}
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.setState({ content: value }, () => {
            this.handleChange();
          });
        }}
      />
    )
  }
}

export default CodeEditor;