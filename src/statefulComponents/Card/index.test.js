import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './index';

describe('Card', () => {
  it('should match snapshot with all data', () => {
    const wrapper = shallow(<Card
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

    expect(wrapper).toMatchSnapshot();
  });
});