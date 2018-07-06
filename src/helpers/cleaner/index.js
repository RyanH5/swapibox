import { fetchStarWarsData } from '../fetch/index';
import { getData } from '../selectCategory/index';

export const cleanFilmCrawlData = async (url) => {
  const filmCrawl = await fetchStarWarsData(url);
  const year = filmCrawl.release_date.split('-', 1).toString();
  return {title: filmCrawl.title, year, crawl: filmCrawl.opening_crawl};
};

// PEOPLE CLEANERS
export const cleanPeopleData = async (url) => {
  const {results} = await fetchStarWarsData(url);
  const allPeople = results.map(async person => {
    const name = person.name;
    const homeworldData = await getData(person.homeworld);
    const specieData = await getData(...person.species);
    return {
      name, 
      homeworld: homeworldData.homeworld,
      species: specieData.specieName,
      population: homeworldData.population
    };
  });
  return Promise.all(allPeople);
};

export const cleanHomeworldData = async (url) => {
  const planet = await fetchStarWarsData(url);
  const homeworld = planet.name;
  const population = planet.population;
  return {homeworld, population};
};

export const cleanSpeciesData = async (url) => {
  const specie = await fetchStarWarsData(url);
  const specieName = specie.name;
  return {specieName};
};

// PLANET CLEANERS
export const cleanPlanetData = async (url) => {
  const {results} = await fetchStarWarsData(url);
  const allPlanets = results.map(async planet => {
    const name = planet.name;
    const terrain = planet.terrain;
    const population = planet.population;
    const climate = planet.climate;
    let eachResident = planet.residents.map(async resident => {
      let residentName = await getData(resident);
      return residentName;
    });
    const residents = await Promise.all(eachResident);
      
    return ({
      name,
      terrain,
      population,
      climate,
      residents
    });
  });
  return Promise.all(allPlanets);
};

export const cleanResidentsData = async (url) => {
  const planetResident = await fetchStarWarsData(url);
  const resident = planetResident.name;
  return resident;
};

// VEHICLE CLEANER

export const cleanVehiclesData = async (url) => {
  const {results} = await fetchStarWarsData(url);
  const allVehicles = results.map(vehicle => {
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

