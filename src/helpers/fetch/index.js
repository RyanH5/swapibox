import { 
  cleanFilmCrawl, 
  cleanPeopleData, 
  cleanHomeworldData, 
  cleanSpeciesData
} from '../cleaner/index';

const fetchFilmCrawl = async () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const url = `http://swapi.co/api/films/${randomNum}`;
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const filmCrawl = await response.json();
      const cleanedFilm = cleanFilmCrawl(filmCrawl);
      return cleanedFilm;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ) {
    throw new Error('failed');
  }
};

const fetchPeople = async () => {
  const url = 'http://swapi.co/api/people';
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const peopleData = await response.json();
      const cleanedPeopleData = cleanPeopleData(peopleData);
      return cleanedPeopleData;
    } else {
      throw new Error( response.status );
    }
  } catch (error) {
    throw new Error('failed');
  }
};

const fetchHomeworld = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const homeworldData = await response.json();
      const cleanedHomeworldData = cleanHomeworldData(homeworldData);
      return cleanedHomeworldData;
    } else {
      throw new Error( response.status );
    }
  } catch (error) {
    throw new Error('failed');
  }
};

const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const speciesData = await response.json();
      const cleanedSpeciesData = cleanSpeciesData(speciesData);
      return cleanedSpeciesData;
    } else {
      throw new Error( response.status );
    }
  } catch (error) {
    throw new Error('failed');
  }
};

export { fetchFilmCrawl, fetchPeople, fetchSpecies, fetchHomeworld };
