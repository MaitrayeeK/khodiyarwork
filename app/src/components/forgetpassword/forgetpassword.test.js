import React from 'react';
import { shallow, render, mount } from 'enzyme';
import forgetpassword from './forgetpassword';

describe('forgetpassword', () => {
  let props;
  let shallowforgetpassword;
  let renderedforgetpassword;
  let mountedforgetpassword;

  const shallowTestComponent = () => {
    if (!shallowforgetpassword) {
      shallowforgetpassword = shallow(<forgetpassword {...props} />);
    }
    return shallowforgetpassword;
  };

  const renderTestComponent = () => {
    if (!renderedforgetpassword) {
      renderedforgetpassword = render(<forgetpassword {...props} />);
    }
    return renderedforgetpassword;
  };

  const mountTestComponent = () => {
    if (!mountedforgetpassword) {
      mountedforgetpassword = mount(<forgetpassword {...props} />);
    }
    return mountedforgetpassword;
  };  

  beforeEach(() => {
    props = {};
    shallowforgetpassword = undefined;
    renderedforgetpassword = undefined;
    mountedforgetpassword = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
