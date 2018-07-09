import { fetchStarWarsData } from '../fetch/index';
import { getData, getCategory } from '../selectCategory/index';

describe('getData', () => {
  let mockUrl = "https://swapi.co/api/people";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let getData = jest.fn();

  it('calls getData with the correct params', async () => {
    await getData(mockUrl);

    expect(getData).toHaveBeenCalledWith(mockUrl);
  }); 
});

describe('getCategory', () => {
  it('should return the fourth index of the url', () => {
    let mockUrl = "https://swapi.co/api/people";
    
    const actual = getCategory(mockUrl);
    const expected = 'people';
  
    expect(actual).toEqual(expected);
  });

});