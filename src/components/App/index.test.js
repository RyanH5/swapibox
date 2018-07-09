import React from 'react';
import App from './index';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifeCycleMethods: true});
    defaultState = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      currentCategory: 'films',
      errorStatus: ''
    };
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct default state', () => {

    expect(wrapper.state('people')).toEqual([]);    
    expect(wrapper.state('planets')).toEqual([]);
    expect(wrapper.state('vehicles')).toEqual([]);
    expect(wrapper.state('favorites')).toEqual([]);
    expect(wrapper.state('currentCategory')).toEqual('films');
    expect(wrapper.state('errorStatus')).toEqual('');   
  });

  describe('displayFavorites', () => {
    it('should set currentCategory: favorites when favorites is clicked', () => {
      wrapper.instance().displayFavorites();
    
      expect(wrapper.state('currentCategory')).toEqual('favorites');
    });
  });

  describe('updateCards', () => {
    it.skip('should call getData with correct params', async () => {
      let mockUrl = 'https://swapi.co/api/people';
      wrapper.instance().updateCards(mockUrl);
  
      expect(getData).toHaveBeenCalledWith(mockUrl);
    });