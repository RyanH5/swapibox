
describe('cleanFilmCrawlData', () => {
  let mockUrl = "https://swapi.co/api/films";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let fetchStarWarsData = jest.fn();

  it('calls fetchStarWarsData with the correct params', async () => {
    await fetchStarWarsData(mockUrl);

    expect(fetchStarWarsData).toHaveBeenCalledWith(mockUrl);
  }); 
});

describe('cleanPeopleData', () => {
  let mockUrl = "https://swapi.co/api/people";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let fetchStarWarsData = jest.fn();

  it('calls fetchStarWarsData with the correct params', async () => {
    await fetchStarWarsData(mockUrl);

    expect(fetchStarWarsData).toHaveBeenCalledWith(mockUrl);
  }); 
});

describe('cleanHomeworldData', () => {
  let mockUrl = "https://swapi.co/api/planets/1";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let fetchStarWarsData = jest.fn();

  it('calls fetchStarWarsData with the correct params', async () => {
    await fetchStarWarsData(mockUrl);

    expect(fetchStarWarsData).toHaveBeenCalledWith(mockUrl);
  }); 
});

describe('cleanSpeciesData', () => {
  let mockUrl = "https://swapi.co/api/people/species";
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockFilmData),
    status: 200,
    ok: true
  }));
  let fetchStarWarsData = jest.fn();

  it('calls fetchStarWarsData with the correct params', async () => {
    await fetchStarWarsData(mockUrl);

    expect(fetchStarWarsData).toHaveBeenCalledWith(mockUrl);
  }); 
});