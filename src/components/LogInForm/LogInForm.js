import React from 'react';
import Form from 'ui-components/Form';
import Button from 'ui-components/Button';

const LogInForm = () => {
  return (
    <Form>
      <h3>Please sign in</h3>
      <Button onClick={(e) => {e.preventDefault(); console.log('fuck yeah!');}}>
        Sign In
      </Button>
    </Form>
  )
};
 
export default LogInForm;