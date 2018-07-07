import React from 'react';
import { Card } from '../Card/index';
import PropTypes from 'prop-types';

const MainContainer = ({categoryData, currentCategory} ) => {
  let displayCards = [];
  if (categoryData) {
    displayCards = categoryData.map((catData, index) => {
      return <Card 
        {...catData} 
        key={index} 
        currentCategory={currentCategory} 
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
  categoryData: PropTypes.array,
  currentCategory: PropTypes.string.isRequired
};

  

export default MainContainer;
