import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './layouts/header';
import Wrapper from './layouts/wrapper';
import 'jest-styled-components';

describe('Loading component', () => {
  test('Test snapshot', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });
});
