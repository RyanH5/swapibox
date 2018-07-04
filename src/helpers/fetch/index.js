import { 
  cleanFilmCrawl, 
  cleanHomeworldData, 
  cleanSpeciesData,
  cleanResidents
} from '../cleaner/index';

// OPENING CRAWL FETCH
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

// MAIN FETCH
export const fetchStarWarsData = async (category) => {
  try {
    const url = `https://swapi.co/api/${category}`;
    fetch(url);
    const response = await fetch(url);
    if (response.status === 200) {
      const info = await response.json();
      return info;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ) {
    throw new Error('failed');
  }
};

// PEOPLE FETCH FN's

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

const fetchResidents = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const residentData = await response.json();
      const cleanedResidents = await cleanResidents(residentData);
      return cleanedResidents.resident;
    }
  } catch (error){
    throw new Error('failed');
  }
};

export { fetchFilmCrawl, fetchSpecies, fetchHomeworld, fetchResidents };
