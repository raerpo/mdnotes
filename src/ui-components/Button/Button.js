import React from 'react';
import styled from 'styled-components';
import { colors } from 'ui-components/constants';

const ButtonWrapper = styled.div`
  & > button {
    background-color: ${colors.main};
    color: ${colors.textColor};
    border: none;
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
  }
`;

const Button = (props) => {
  return (
    <ButtonWrapper>
      <button>
        {props.children}
      </button>
    </ButtonWrapper>
  );
}
 
export default Button;