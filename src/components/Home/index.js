import React from 'react';
import cx from 'classnames';

const Home = ({ onlogInWithGithub, isLogginIn }) => {
  const buttonClassNames = cx('ui basic button massive', { loading: isLogginIn });
  return (
    <div className="ui container">
      <div className="ui text container">
        <h1 className="ui header">MDnotes</h1>
        <h3>Take notes wherever you are. Even on your text editor.</h3>
        <button className={buttonClassNames} onClick={onlogInWithGithub}>
          <i className="icon github"></i>
          Login with Github
        </button>
      </div>
    </div>
  );
}

export default Home;