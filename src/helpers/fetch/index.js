import { cleanFilmCrawl } from '../cleaner/index';

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

export { fetchFilmCrawl };
