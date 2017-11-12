import React from 'react';
import Header from 'ui-components/Header';

const LogInHeader = () => {
  return (
    <Header>
      <span className="logo">
        MDNotes
      </span>
      <span className="actions">
        <a href="" className="sign-in">
          Sign in
        </a>
      </span>
    </Header>
  );
}
 
export default LogInHeader;