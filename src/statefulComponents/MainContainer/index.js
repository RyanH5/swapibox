import React from 'react';
import { Card } from '../Card/index';
import PropTypes from 'prop-types';

const MainContainer = ({categoryData, currentCategory, toggleFavorite} ) => {
  let displayCards = [];
  if (categoryData) {
    displayCards = categoryData.map((catData, index) => {
      return <Card 
        {...catData} 
        key={index}
        id={currentCategory + catData.name} 
        currentCategory={currentCategory} 
        toggleFavorite={toggleFavorite}
      />;
    });
  }
 
  return (
    <div>
      {displayCards}
    </div>
  );
};

MainContainer.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  categoryData: PropTypes.array,
  toggleFavorite: PropTypes.func
};

  

export default MainContainer;
