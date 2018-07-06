import { fetchStarWarsData } from '../fetch/index';
import { cleanPeopleData, cleanPlanetData, cleanVehiclesData, cleanFilmCrawlData, cleanSpeciesData, cleanResidentsData, cleanHomeworldData } from '../cleaner/index';
// import { rout } from 'constants';

export const getData = async (url) => {
  const category = getCategory(url)
  switch (category) {
    case 'people':
      splitUrl = url.split("/");
      if (splitUrl[5]) {
        return cleanResidentsData(url); 
      } else {
        return cleanPeopleData(url);        
      }
    
    case 'planets':
      let splitUrl = url.split("/");
      if (splitUrl[5]) {
        return cleanHomeworldData(url);
      } else {
        return cleanPlanetData(url);
      }

    case 'vehicles':
      return cleanVehiclesData(url);

    case 'films':
      return cleanFilmCrawlData(url);

    case 'species':
      return cleanSpeciesData(url);
  }

};

export const getCategory = (url) => {
  const splitUrl = url.split("/");
  return splitUrl[4];
}
