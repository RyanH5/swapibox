import React from 'react';

export const Card = (props) => {
  console.log(props)
  switch (props.currentCategory) {
    case 'people':
      return (
        <div>
          <h1>Name: {props.name}</h1>
          <h2>Homeworld: {props.homeworld}</h2>
          <h3>Species: {props.species}</h3>
          <h5>Population: {props.population}</h5>
        </div>
      );

    case 'vehicles':
      return (
        <div>
          <h1>{props.name}</h1>
        </div>
      );

    case 'planets':
      return (
        <div>
          <h1>{props.name}</h1>
        </div>
      );
  }
};