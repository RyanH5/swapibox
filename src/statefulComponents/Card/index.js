import React from 'react';

export const Card = (props) => {
  switch (props.currentCategory) {
    case 'people':
      return (
        <div>
          <h1>Name: {props.name}</h1>
          <h2>Homeworld: {props.homeworld}</h2>
          <h3>Species: {props.species}</h3>
          <h5>Homeworld Population: {props.population}</h5>
        </div>
      );

    case 'vehicles':
      return (
        <div>
          <h1>Name: {props.name}</h1>
          <h2>Model: {props.model}</h2>
          <h3>Class: {props.vehicleClass}</h3>
          <h5>Passengers: {props.passengers}</h5>
        </div>
      );

    case 'planets':
      return (
        <div>
          <h1>Name: {props.name}</h1>
          <h2>Terrain: {props.terrrain}</h2>
          <h3>Climage: {props.climate}</h3>
          <h4>Population: {props.population}</h4>
          <h5>Residents: {props.residents}</h5>
        </div>
      );
  }
};