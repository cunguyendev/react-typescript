import React from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Wrapper from './layouts/wrapper';

const navigationData = [
  {
    url: '/',
    text: 'Home',
    active: true
  },
  {
    url: '/about/',
    text: 'About'
  },
  {
    url: '/projects/',
    text: 'Projects'
  }
]

const theApp = {
  name:  'Code Lab',
  baseUrl: '/'
}

const App = () => {
  return (
    <div className="App">
      <Header navigationData={navigationData} theApp={theApp}/>
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
