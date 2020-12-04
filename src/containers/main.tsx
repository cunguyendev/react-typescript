import React from 'react';
import { MainLayout } from './styled';
import Header from '../components/header';
import Footer from '../components/footer';
import Tmp from './tmp';

type ContextProps = {
  appName: string,
  theme: string
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

const Main = () => {
  return (
    <AppContext.Provider value={{
      appName: "Code Lab",
      theme: "light"
    }}
    >
       <MainLayout>
        <Header />
        <Tmp />
        <Footer />
      </MainLayout>
    </AppContext.Provider>
  );
}

export default Main;
