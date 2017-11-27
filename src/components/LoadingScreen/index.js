import React from 'react';

const LoadingScreen = () => {
  return <div className="ui segment fullscreen">
    <div className="ui active dimmer">
      <div className="ui massive text loader">Loading notes...</div>
    </div>
  </div>
}

export default LoadingScreen;