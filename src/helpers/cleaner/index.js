import { fetchSpecies, fetchHomeworld, fetchResidents } from '../fetch/index';

export const cleanFilmCrawl = (filmCrawl) => {
  const year = filmCrawl.release_date.split('-', 1).toString();
  return {title: filmCrawl.title, year, crawl: filmCrawl.opening_crawl};
};

// PEOPLE CLEANERS
export const cleanPeopleData = (peopleData) => {
  const allPeople = peopleData.map(async person => {
    const name = person.name;
    const homeworldData = await fetchHomeworld(person.homeworld);
    const specieData = await fetchSpecies(person.species);
    return {
      name, 
      homeworld: homeworldData.homeworld,
      species: specieData.specieName,
      population: homeworldData.population
    };
  });
  return Promise.all(allPeople);
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

// PLANET CLEANERS
export const cleanPlanetData = (planets) => {
  const allPlanets = planets.results.map(async planet => {
    const name = planet.name;
    const terrain = planet.terrain;
    const population = planet.population;
    const climate = planet.climate;
    let eachResident = planet.residents.map(async resident => {
      let residentName = await fetchResidents(resident);
      return residentName;
    });
    console.log(eachResident)

    return ({
      name,
      terrain,
      population,
      climate,
      residents: eachResident
    });
  });
  return Promise.all(allPlanets);
};

export const cleanResidents = (planetResident) => {
  const resident = planetResident.name;
  return {resident};
};

