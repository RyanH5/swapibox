import { fetchStarWarsData } from '../fetch/index';
import { cleanPeopleData } from '../cleaner/index';

export const selectCategory = async (category) => {
  const starWarsInfo = await fetchStarWarsData(category);
  switch (category) {
    case 'people':
      return cleanPeopleData(starWarsInfo);
      break;
  }

};