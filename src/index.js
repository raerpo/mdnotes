import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { colors } from './ui-components/constants';
import App from './App';

injectGlobal`
  body {
    margin: 0px;
    font-size: 16px;
    font-family: arial;
    background-color: ${colors.background};
    color: ${colors.textColor}
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
