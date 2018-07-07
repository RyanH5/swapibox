import React from 'react';
import PropTypes from 'prop-types';

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
    residents
  } = props;
  switch (currentCategory) {
    case 'people':
      return (
        <div>
          <h1>Name: {name}</h1>
          <h2>Homeworld: {homeworld}</h2>
          <h3>Species: {species}</h3>
          <h5>Homeworld Population: {population}</h5>
        </div>
      );

    case 'vehicles':
      return (
        <div>
          <h1>Name: {name}</h1>
          <h2>Model: {model}</h2>
          <h3>Class: {vehicleClass}</h3>
          <h5>Passengers: {passengers}</h5>
        </div>
      );

    case 'planets':
      return (
        <div>
          <h1>Name: {name}</h1>
          <h2>Terrain: {terrain}</h2>
          <h3>Climage: {climate}</h3>
          <h4>Population: {population}</h4>
          <h5>Residents: {residents}</h5>
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
  residents: PropTypes.array
};