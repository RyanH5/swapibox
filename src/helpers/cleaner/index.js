import { fetchSpecies, fetchHomeworld, fetchResidents } from '../fetch/index';

export const cleanFilmCrawl = (filmCrawl) => {
  const year = filmCrawl.release_date.split('-', 1).toString();
  return {title: filmCrawl.title, year, crawl: filmCrawl.opening_crawl};
};

// PEOPLE CLEANERS
export const cleanPeopleData = ({results}) => {
  const allPeople = results.map(async person => {
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
    const ans = await Promise.all(eachResident);
      
    return ({
      name,
      terrain,
      population,
      climate,
      residents: ans
    });
  });
  return Promise.all(allPlanets);
};

export const cleanResidents = (planetResident) => {
  const resident = planetResident.name;
  return {resident};
};

// VEHICLE CLEANER

export const cleanVehicles = (vehicles) => {
  const allVehicles = vehicles.map(vehicle => {
    const name = vehicle.name;
    const model = vehicle.model;
    const vehicleClass = vehicle.vehicle_class;
    const passengers = vehicle.passengers;
    return ({
      name,
      model,
      vehicleClass,
      passengers
    });
  });
  return Promise.all(allVehicles);
};

