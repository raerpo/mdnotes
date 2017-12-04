import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
// import debounce from 'lodash/debounce';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

const options = {
  lineNumbers: true,
  mode: 'markdown'
};

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  componentDidMount() {
    this.setState({
      value: this.props.content
    });
  }
  shouldComponentUpdate(nextProps) {
    console.log('current: ', this.props);
    console.log('next: ', nextProps);
    return this.props.activeNote !== nextProps.activeNote;
  }
  handleChange = (e) => {
    const { changeNote, activeNote } = this.props;
    changeNote(this.state.value, activeNote);
  }
  render() {
    return (
      <CodeMirror
        value={this.state.value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.setState({ value }, () => {
            this.handleChange();
          });
        }}
      />
    )
  }
}

export default CodeEditor;