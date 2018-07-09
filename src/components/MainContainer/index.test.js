import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './index';

describe('MainContainer', () => {
  it('should match snapshot with all data', () => {
    const mockCategoryData = [{
      name: 'SandDigger',
      vehicleClass: 'wheeled',
      model: 't-990',
      passengers: 500
    }];
    const wrapper = shallow(<MainContainer 
      mockCategoryData={mockCategoryData} />);

    expect(wrapper).toMatchSnapshot();
  });
});