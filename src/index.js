import React from 'react';
import ReactDOM from 'react-dom';
import LogInHeader from './components/LogInHeader';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0px;
    font-size: 16px;
    font-family: arial;
  }
`;

ReactDOM.render(<div><LogInHeader /></div>, document.getElementById('root'));
