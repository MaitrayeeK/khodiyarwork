import React from 'react';
import { shallow, render, mount } from 'enzyme';
import addRecord from './addRecord';

describe('addRecord', () => {
  let props;
  let shallowaddRecord;
  let renderedaddRecord;
  let mountedaddRecord;

  const shallowTestComponent = () => {
    if (!shallowaddRecord) {
      shallowaddRecord = shallow(<addRecord {...props} />);
    }
    return shallowaddRecord;
  };

  const renderTestComponent = () => {
    if (!renderedaddRecord) {
      renderedaddRecord = render(<addRecord {...props} />);
    }
    return renderedaddRecord;
  };

  const mountTestComponent = () => {
    if (!mountedaddRecord) {
      mountedaddRecord = mount(<addRecord {...props} />);
    }
    return mountedaddRecord;
  };  

  beforeEach(() => {
    props = {};
    shallowaddRecord = undefined;
    renderedaddRecord = undefined;
    mountedaddRecord = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
