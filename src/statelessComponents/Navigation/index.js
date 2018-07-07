import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../helpers/constants/routes';
import PropTypes from 'prop-types';

const Navigation = ({updateCards, displayFavorites}) => {
  return (
    <div>
      <button onClick={() => updateCards('https://swapi.co/api/people/')}>People</button>
      <button onClick={() => updateCards('https://swapi.co/api/planets/')}>Planets</button>
      <button onClick={() => updateCards('https://swapi.co/api/vehicles/')}>Vehicles</button>  
      <button onClick={() => displayFavorites()}>Favorites<span></span></button>  
    </div>
  );
};

Navigation.propTypes = {
  updateCards: PropTypes.func,
  displayFavorites: PropTypes.func
};
  
export default Navigation;
