import React from 'react';
import PageWrap from 'ui-components/PageWrap';
import LogInHeader from 'components/LogInHeader';
import LogInForm from 'components/LogInForm';

const LogInPage = () => {
  return (
    <PageWrap>
      <LogInHeader />
      <LogInForm />
    </PageWrap>
  );
}
 
export default LogInPage;