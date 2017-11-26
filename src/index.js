import React from 'react';
import ReactDOM from 'react-dom';
import { backgroundColor, textColor } from './constants/colors';
import { injectGlobal } from 'styled-components';
import App from './components/App';

import 'semantic-ui-css/semantic.min.css';

injectGlobal`
  body {
    margin: 0px;
    font-size: 14px;
    font-family: arial;
    background-color: ${backgroundColor};
    color: ${textColor}
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
