import React from 'react';
import PageWrap from 'ui-components/PageWrap';
import LogInHeader from 'components/LogInHeader';
import LogInForm from 'components/LogInForm';

const LogInPage = (props) => {
  return (
    <PageWrap>
      <LogInHeader />
      <LogInForm {...props}/>
    </PageWrap>
  );
}
 
export default LogInPage;