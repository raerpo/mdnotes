import React from 'react';
import styled from 'styled-components';

const PageWrapStyles = styled.section`
  width: 100%;
  height: 100vh;
`;

const PageWrap = (props) => {
  return (
    <PageWrapStyles>
      {props.children}
    </PageWrapStyles>
  );
}
 
export default PageWrap;