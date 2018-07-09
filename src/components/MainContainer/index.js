import React from 'react';
import { Card } from '../Card/index';
import PropTypes from 'prop-types';
import './styles.css';

export const MainContainer = ({
  categoryData, 
  currentCategory, 
  toggleFavorite, 
  favorites
}) => {
  
  let displayCards = [];
  if (categoryData) {
    displayCards = categoryData.map((catData, index) => {
      return <Card 
        {...catData} 
        key={index}
        id={currentCategory + catData.name} 
        currentCategory={currentCategory} 
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />;
    });
  }
 
  return (
    <div className={'container'}>
      {currentCategory === 'favorites' && !favorites.length &&
        <h1>CHOOSE FAVORITES FIRST,<br></br> YOU MUST!</h1>
      }
      {displayCards}
    </div>
  );
};

MainContainer.propTypes = {
  currentCategory: PropTypes.string,
  categoryData: PropTypes.array,
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array
};

export default MainContainer;
