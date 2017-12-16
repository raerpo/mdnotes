import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

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
    changeNote(this.state.content, activeNote);
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