import React from 'react';
import Form from 'ui-components/Form';
import Button from 'ui-components/Button';

const LogInForm = (props) => {
  return (
    <Form>
      <h3>Please sign in</h3>
      <Button onClick={props.handleLogin}>
        Log in with Github
      </Button>
    </Form>
  )
};
 
export default LogInForm;