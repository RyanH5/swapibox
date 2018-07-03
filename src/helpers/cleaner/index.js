import { fetchSpecies, fetchHomeworld } from '../fetch/index';

export const cleanFilmCrawl = (filmCrawl) => {
  const year = filmCrawl.release_date.split('-', 1).toString();
  return {title: filmCrawl.title, year, crawl: filmCrawl.opening_crawl};
};

export const cleanPeopleData = (peopleData) => {
  peopleData.results.map(person => {
    const name = person.name;
    const homeworldData = fetchHomeworld(person.homeworld);
    const specieData = fetchSpecies(person.species);
    return {
      name, 
      homeworld: homeworldData.homeworld,
      species: specieData.name,
      population: homeworldData.population
    };
  });
};

export const cleanHomeworldData = (planet) => {
  const homeworld = planet.name;
  const population = planet.population;
  return {homeworld, population};
};

export const cleanSpeciesData = (specie) => {
  const specieName = specie.name;
  return {specieName};
};