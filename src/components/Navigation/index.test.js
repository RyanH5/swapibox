import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './index';

describe('Navigation', () => {
  let wrapper;
  let mockFavorites;
  let mockUpdateCards;
  let mockDisplayFavorites;

  beforeEach(() => {
    mockFavorites = [{
      name: 'SandDigger',
      vehicleClass: 'wheeled',
      model: 't-990',
      passengers: 500
    }];

    mockUpdateCards = jest.fn();
    mockDisplayFavorites = jest.fn();
    wrapper = shallow(<Navigation 
      favorites={mockFavorites} 
      updateCards={mockUpdateCards}
      displayFavorites={mockDisplayFavorites}
    />);

  });
  it('should match snapshot with all data', () => {
    

    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateCards on click', () => {
    wrapper.find('button').first().simulate('click');
    const expected = 'https://swapi.co/api/people/';

    expect(mockUpdateCards).toHaveBeenCalledWith(expected);
  });

  it('should call displayFavorites on click', () => {
    wrapper.find('button').last().simulate('click');

    expect(mockDisplayFavorites).toHaveBeenCalled();
  });
});