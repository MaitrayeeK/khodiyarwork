import React from 'react';
import { shallow, render, mount } from 'enzyme';
import signup from './signup';

describe('signup', () => {
  let props;
  let shallowsignup;
  let renderedsignup;
  let mountedsignup;

  const shallowTestComponent = () => {
    if (!shallowsignup) {
      shallowsignup = shallow(<signup {...props} />);
    }
    return shallowsignup;
  };

  const renderTestComponent = () => {
    if (!renderedsignup) {
      renderedsignup = render(<signup {...props} />);
    }
    return renderedsignup;
  };

  const mountTestComponent = () => {
    if (!mountedsignup) {
      mountedsignup = mount(<signup {...props} />);
    }
    return mountedsignup;
  };  

  beforeEach(() => {
    props = {};
    shallowsignup = undefined;
    renderedsignup = undefined;
    mountedsignup = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
