import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Navigation = ({
  updateCards, 
  displayFavorites, 
  favorites
}) => {
  return (
    <div>
      <h1 className={'star-wars'}>STAR WARS</h1>
      <div className={'nav'}>
        <button onClick={() => updateCards('https://swapi.co/api/people/')}>
        People</button>
        <button onClick={() => updateCards('https://swapi.co/api/planets/')}>
        Planets</button>
        <button onClick={() => updateCards('https://swapi.co/api/vehicles/')}>
        Vehicles</button>  
        <button onClick={() => displayFavorites()}>
        Favorites<span>{favorites.length}</span></button>  
      </div>
    </div>
  );
};

Navigation.propTypes = {
  updateCards: PropTypes.func,
  displayFavorites: PropTypes.func,
  favorites: PropTypes.array
};
  
export default Navigation;
