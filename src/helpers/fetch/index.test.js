import React from 'react';
import { shallow } from 'enzyme';
import { fetchStarWarsData } from './index';

describe('fetchStarWarsData', () => {
  let mockInfo;
  let mockUrl;
  let mockResponse;

  beforeEach(() => {
    mockInfo = {
      birth_year: "37BBY",
      created: "2014-12-15T13:01:57.178000Z",
      edited: "2014-12-20T21:17:50.359000Z",
      eye_color: "blue",
      films: ["https://swapi.co/api/films/2/"],
      gender: "male",
      hair_color: "none",
      height: "175",
      homeworld: "https://swapi.co/api/planets/6/",
      mass: "79",
      name: "Lobot",
      skin_color: "light",
      species: ["https://swapi.co/api/species/1/"],
      starships: [],
      url: "https://swapi.co/api/people/26/"
    };
    mockUrl = "https://swapi.co/api/planets/";
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockInfo),
      status: 200,
      ok: true
    }));
  });

  it('should call fetch with the correct params', async () => {
    await fetchStarWarsData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return star wars info upon fetch success', async () => {
    const actual = await fetchStarWarsData(mockUrl);
    await expect(actual).toEqual(mockInfo);
  });

  it('should update state with errorStatus if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error occured'));
    });
    
    const expected = new Error('Error occured');    
    const actual = fetchStarWarsData(mockUrl);
    
    await expect(actual).rejects.toEqual(expected);
  });
});
