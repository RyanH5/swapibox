import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './index';

describe('MainContainer', () => {
  let wrapper;
  let mockCategoryData;
  let mockUpdateCards;
  let mockDisplayFavorites;

  beforeEach(() => {
    mockCategoryData = [{
      name: 'SandDigger',
      vehicleClass: 'wheeled',
      model: 't-990',
      passengers: 500
    }];

    mockUpdateCards = jest.fn();
    mockDisplayFavorites = jest.fn();
    wrapper = shallow(<MainContainer 
      mockCategoryData={mockCategoryData} 
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
});