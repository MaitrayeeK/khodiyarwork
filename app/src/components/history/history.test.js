import React from 'react';
import { shallow, render, mount } from 'enzyme';
import history from './history';

describe('history', () => {
  let props;
  let shallowhistory;
  let renderedhistory;
  let mountedhistory;

  const shallowTestComponent = () => {
    if (!shallowhistory) {
      shallowhistory = shallow(<history {...props} />);
    }
    return shallowhistory;
  };

  const renderTestComponent = () => {
    if (!renderedhistory) {
      renderedhistory = render(<history {...props} />);
    }
    return renderedhistory;
  };

  const mountTestComponent = () => {
    if (!mountedhistory) {
      mountedhistory = mount(<history {...props} />);
    }
    return mountedhistory;
  };  

  beforeEach(() => {
    props = {};
    shallowhistory = undefined;
    renderedhistory = undefined;
    mountedhistory = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
