import { fetchStarWarsData } from '../fetch/index';
import { cleanPeopleData, cleanPlanetData } from '../cleaner/index';

export const selectCategory = async (category) => {
  const starWarsInfo = await fetchStarWarsData(category);
  switch (category) {
    case 'people':
      return cleanPeopleData(starWarsInfo);
      break;
    
    case 'planets':
      return cleanPlanetData(starWarsInfo)
      break;
  }

};