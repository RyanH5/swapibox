import React from 'react';
import App from './index';
import { shallow } from 'enzyme';
import { getData, getCategory } from '../../helpers/selectCategory/';
jest.mock('../../helpers/selectCategory/');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('updateCards', () => {
    it('calls getData', () => {
      const expected = 'url';
      wrapper.instance().updateCards(expected);

      expect(getData).toHaveBeenCalledWith(expected);
    });

    it('calls getCategory with correct url', async () => {
      const expected = 'url';      
      await wrapper.instance().updateCards(expected);

      expect(getCategory).toHaveBeenCalledWith(expected);
    });

    it('sets the state with expected category', async () => {
      const expectedState = {
        people: [{name: 'hdae', id: 'hdae'}],
        planets: [],
        vehicles: [],
        favorites: [],
        currentCategory: 'people',
        errorStatus: ''
      };
      const expected = 'heyss';

      await wrapper.instance().updateCards(expected);

      expect(wrapper.state()).toEqual(expectedState);
    });
  });

  describe('toggleFavorites', () => {
    it('should update state', () => {
      const initialState = {
        people: [{name: 'jeff', id: 'jeff'}],
        planets: [],
        vehicles: [],
        favorites: [],
        currentCategory: 'people',
        errorStatus: ''
      };
      const expectedState = {
        people: [{name: 'jeff', id: 'jeff'}],
        planets: [],
        vehicles: [],
        favorites: [{name: 'jeff', id: 'jeff'}],
        currentCategory: 'people',
        errorStatus: ''
      };
      wrapper.setState({
        ...initialState
      });

      wrapper.instance().toggleFavorite({id: 'jeff'});

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should update state', () => {
      const expectedState = {
        people: [{name: 'jeff', id: 'jeff'}],
        planets: [],
        vehicles: [],
        favorites: [],
        currentCategory: 'people',
        errorStatus: ''
      };
      const initialState = {
        people: [{name: 'jeff', id: 'jeff'}],
        planets: [],
        vehicles: [],
        favorites: [{name: 'jeff', id: 'jeff'}],
        currentCategory: 'people',
        errorStatus: ''
      };
      wrapper.setState({
        ...initialState
      });
      
      wrapper.instance().toggleFavorite({id: 'jeff'});

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('displayFavorites', () => {
    it('should set state to favorites', () => {

      wrapper.instance().displayFavorites();
  
      expect(wrapper.state('currentCategory')).toEqual('favorites');
    });
  });
});