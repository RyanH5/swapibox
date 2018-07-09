import React from 'react';
import { Navigation } from './index';
import { shallow } from 'enzyme';

describe('Navigation', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Navigation 
      updateCards={jest.fn()}
      displayFavorites={jest.fn()}
      favorites={
        [{
          name: 'SandDigger',
          vehicleClass: 'wheeled',
          model: 't-990',
          passengers: 500
        }]} 
    />);
  });

  it('should render navigation buttons', () => {
    expect(wrapper).toMatchSnapshot();
  });
});