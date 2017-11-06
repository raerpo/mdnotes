import React from 'react';
import styled from 'styled-components';
import { sizes } from '../constants';

const FormStyles = styled.div`
  display: flex;
  justify-content: center;
  & > form {
    min-width: ${sizes.formWidth};
  }
`;

const Form = (props) => {
  return (
    <FormStyles>
      <form>
        {props.children}
      </form>
    </FormStyles>
  )
}
 
export default Form;