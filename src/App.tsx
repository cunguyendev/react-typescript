import React, { useState } from 'react';
import Header from './layouts/header';
import Wrapper from './layouts/wrapper';
import styled from 'styled-components';

const theApp = {
  name:  'Code Lab',
  baseUrl: '/'
}

const Layout = styled.div``;

type ContextProps = {
  authenticated: boolean,
  action: (status: boolean) => void,
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

const App = () => {
  const [loginStatus, updateLoginStatus] = useState(false);

  return (
    <AppContext.Provider value={{
      authenticated: loginStatus,
      action: updateLoginStatus,
      }}>
      <Layout>
        <Header theApp={theApp}/>
        <Wrapper />
      </Layout>
    </AppContext.Provider>
  );
}

export default React.memo(App);
