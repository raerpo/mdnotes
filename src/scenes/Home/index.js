import React from 'react';
import cx from 'classnames';

import './index.css';

const Home = ({ onlogInWithGithub, isLogginIn }) => {
  const buttonClassNames = cx(
    'ui basic button massive main-wrapper_content_github',
    { loading: isLogginIn },
  );
  return (
    <div className="ui main-wrapper">
      <a href="https://github.com/raerpo/mdnotes" className="github-ribbon">
        <img src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
      </a>
      <div className="ui main-wrapper_background" />

      <div className="ui text main-wrapper_content">
        <div className="ui main-wrapper_menu">
          <img src="/MDnotes_logo-white.png" alt="" />
        </div>

        <div className="ui main-wrapper_info">
          <h2>TAKE YOUR NOTES EVERYWHERE</h2>
          <h3>
            Take notes wherever you are, even on your text editor, and keep them
            on sync all the time.
          </h3>
          <button className={buttonClassNames} onClick={onlogInWithGithub}>
            <i className="icon github" />
            Login with Github
          </button>
        </div>

        <div className="ui main-wrapper_img">
          <img src="/MDnotes_illustration.png" alt="Temporal home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
