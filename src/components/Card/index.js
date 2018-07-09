import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Card = (props) => {
  const {
    currentCategory,
    name,
    homeworld,
    species,
    population,
    model,
    vehicleClass,
    passengers,
    terrain,
    climate,
    residents,
    toggleFavorite,
    id,
    favorites
  } = props;
  
  const selected = favorites.filter(fav => {
    return fav.id === id;
  });

  switch (currentCategory) {
    case 'people':
      return (
        <div className={'card'}>
          <span
            onClick={() => toggleFavorite({id})}         
            className={selected.length ? 'fav active' : 'fav inactive'}
          >
            ✰</span>
          <h1>Name: {name}</h1>
          <h2>Homeworld: {homeworld}</h2>
          <h3>Species: {species}</h3>
          <h4>Homeworld Population: {population}</h4>
        </div>
      );

    case 'vehicles':
      return (
        <div div className={'card'}>
          <span 
            onClick={() => toggleFavorite({id})}
            className={selected.length ? 'active' : 'inactive'}
          >
            ✰</span>
          <h1>Name: {name}</h1>
          <h2>Model: {model}</h2>
          <h3>Class: {vehicleClass}</h3>
          <h4>Passengers: {passengers}</h4>
        </div>
      );

    case 'planets':
      return (
        <div div className={'card'}>
          <span 
            onClick={() => toggleFavorite({id})}
            className={selected.length ? 'active' : 'inactive'}
          >
            ✰</span>
          <h1>Name: {name}</h1>
          <h2>Terrain: {terrain}</h2>
          <h3>Climage: {climate}</h3>
          <h4>Population: {population}</h4>
          <h4>Residents: {residents}</h4>
        </div>
      );

    case 'favorites':
      return (
        <div div className={'card'}>
          <span 
            onClick={() => toggleFavorite({id})}
            className={selected.length ? 'active' : 'inactive'}
          >
            ✰</span>
          <h1>{name}</h1>
          <h2>{terrain}</h2>
          <h3>{climate}</h3>
          <h4>{population}</h4>
          <h4>{residents}</h4>
          <h2>{model}</h2>
          <h3>{vehicleClass}</h3>
          <h4>{passengers}</h4>
          <h2>{homeworld}</h2>
          <h3>{species}</h3>
          <h4>{population}</h4>
        </div>
      );
  }
};

Card.propTypes = {
  currentCategory: PropTypes.string,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  id: PropTypes.string,
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array
};