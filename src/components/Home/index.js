import React from 'react';
import cx from 'classnames';

import './index.css';

const Home = ({ onlogInWithGithub, isLogginIn }) => {
  const buttonClassNames = cx('ui basic button massive main-wrapper_content_github', { loading: isLogginIn });
  return (
    <div className="ui main-wrapper">

      <div className="ui main-wrapper_background">
      </div>

      <div className="ui text main-wrapper_content">

        <div className="ui main-wrapper_menu">

          <img src="/MDnotes_logo-white.png" alt="" />
          <div className="ui main-wrapper_menu_content">
            <a href="/">Authors</a>
            <a href="/">Explore</a>
            <a href="/">Contact</a>
          </div>

        </div>

        <div className="ui main-wrapper_info">

          <h2>TAKE YOUR NOTES EVERYWHERE</h2>
          <h3>Take notes wherever you are, even on your text editor, and keep them on sync all the time.</h3>
          <button className={buttonClassNames} onClick={onlogInWithGithub}>
            <i className="icon github"></i>
            Login with Github
          </button>

        </div>

        <div className="ui main-wrapper_img">

          <img src="http://via.placeholder.com/500x500" alt="" />

        </div>

      </div>

    </div>
  );
}

export default Home;