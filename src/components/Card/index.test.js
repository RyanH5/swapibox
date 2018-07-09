import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './index';

describe('Card', () => {
  let wrapper;
  let toggleFavorite;
  let id;

  beforeEach(() => {
    wrapper = shallow(<Card
      currentCategory='people'
      name='Jeff'
      homeworld='Florida'
      species='Human'
      population='10000'
      toggleFavorite={jest.fn()}
      id='people Jeff'
      favorites={
        [{
          name: "Luke Skywalker", 
          homeworld: "Tatooine", 
          species: "Human", 
          population: "200000", 
          id: "peopleLuke Skywalker"
        }]
      }
    />);

    toggleFavorite = jest.fn();
    id = "peopleLuke Skywalker";
  });
  it('should match snapshot with all data', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke toggleFavorite when star is clicked', () => {
    wrapper.find('.fav').simulate('click');

    expect(wrapper.find('.active').length.toEqual(1));
  });
});