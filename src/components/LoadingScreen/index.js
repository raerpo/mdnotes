import React from 'react';
import { loadingMessages } from 'constants/loadingMessages';

const LoadingScreen = ({ message }) => {
  // message could be either an string, array or undefined
  // if messages are an array it should return only one selected randomly
  const getMessage = (message) => {
    if (message) return message;
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  };
  return (
    <div className="ui segment fullscreen">
      <div className="ui active dimmer">
        <div className="ui massive text loader">{getMessage(message)}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
