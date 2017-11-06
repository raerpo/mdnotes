import React from 'react';
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

ReactDOM.render(<div><LogInPage /></div>, document.getElementById('root'));
