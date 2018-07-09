import React from 'react';
import Landing from './index';
import { shallow } from 'enzyme';

describe('Landing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />, {disableLifecycleMethods: true});
  });

  it('should display Landing with correct data', async () => {
    expect(wrapper).toMatchSnapshot();
  });

});