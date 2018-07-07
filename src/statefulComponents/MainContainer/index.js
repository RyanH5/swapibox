import React from 'react';
import { Card } from '../Card/index';

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

  

export default MainContainer;
