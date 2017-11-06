import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogInPage from 'components/LogInPage';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0px;
    font-size: 16px;
    font-family: arial;
  }
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: null }
  }
  render() { 
    return ( <div>
      <LogInPage />
    </div> );
  }
}
 
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
