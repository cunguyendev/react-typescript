import React from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Wrapper from './layouts/wrapper';

const theApp = {
  name: 'Code Lab',
  baseUrl: '/',
};

const navigationData = [
  {
    url: '/',
    text: 'Home',
    active: true,
  },
  {
    url: '/about/',
    text: 'About',
  },
  {
    url: '/projects/',
    text: 'Projects',
  },
];

const socialData = [
  {
    host: 'https://www.facebook.com/',
    username: 'facebookexample',
    text: 'Facebook',
  },
  {
    host: 'https://www.twitter.com/',
    username: 'twitterexample',
    text: 'Twitter',
  },
];

const App = () => {
  return (
    <div className="App">
      <Header navigationData={navigationData} theApp={theApp} />
      <Wrapper />
      <Footer socialData={socialData} theApp={theApp} />
    </div>
  );
};

export default App;
