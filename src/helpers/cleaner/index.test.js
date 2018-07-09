import { cleanFilmCrawlData } from './index';
import { mockFilmData } from '../../mockData/mockFilmData';
import { fetchStarWarsData } from '../fetch/index';

describe('cleanFilmCrawlData', () => {
  let mockUrl = "https://swapi.co/api/films";
  it.skip('should return correct film data only', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFilmData),
      status: 200,
      ok: true
    }));
    const uncleanData = fetchStarWarsData(mockUrl);
    const actual = cleanFilmCrawlData(uncleanData);
  });
});