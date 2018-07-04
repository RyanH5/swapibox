import { fetchStarWarsData } from '../fetch/index';
import { cleanPeopleData, cleanPlanetData, cleanVehiclesData } from '../cleaner/index';

export const selectCategory = async (category) => {
  const starWarsInfo = await fetchStarWarsData(category);
  switch (category) {
    case 'people':
      return cleanPeopleData(starWarsInfo);
    
    case 'planets':
      return cleanPlanetData(starWarsInfo);

    case 'vehicles':
      return cleanVehiclesData(starWarsInfo);
  }

};