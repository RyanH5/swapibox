import { getCategory } from '../selectCategory/index';
import { mockFilmData } from '../../mockData/mockFilmData';

describe('getData', () => {
  let mockUrl = "https://swapi.co/api/people";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let getData = jest.fn();

  it('calls getData with the correct params', () => {
    getData(mockUrl);

    expect(getData).toHaveBeenCalledWith(mockUrl);
  }); 
  it('calls getCategory with the correct params', () => {
    getData(mockUrl);

    expect(getData).toHaveBeenCalledWith(mockUrl);
  }); 
});

describe('getCategory', () => {
  it('should return the fourth index of the url split by slashes', () => {
    let mockUrl = "https://swapi.co/api/people";  
    const actual = getCategory(mockUrl);
    const expected = 'people';
  
    expect(actual).toEqual(expected);
  });
});