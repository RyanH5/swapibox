import React, { Component } from 'react';
import Landing from '../Landing/index';
import Navigation from '../Navigation/index';
import { getData, getCategory } from '../../helpers/selectCategory/index';
import MainContainer from '../MainContainer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      currentCategory: 'films',
      errorStatus: ''
    };
  }

  updateCards = async (url) => {
    const selectedStarWarsData = await getData(url);
    const category = getCategory(url);
    const dataWithId = selectedStarWarsData.map(card => {
      return {...card, id: category + card.name};
    });
    this.setState({
      [category]: dataWithId,
      currentCategory: category
    });
  }

  toggleFavorite = ({id}) => {
    const { favorites, currentCategory } = this.state;
    const hasID = favorites.filter(fav => id === fav.id);
    if (hasID.length) {
      const newFavs = favorites.filter(eachFavorite => {
        return eachFavorite.id !== id;
      });
      this.setState({
        favorites: [...newFavs]
      }); 
    } else {
      const newFav = this.state[currentCategory].filter(card => {
        return card.id === id;
      });
      this.setState({
        favorites: [...favorites, ...newFav]
      });   
    }
  }

  displayFavorites = () => {
    this.setState({
      currentCategory: 'favorites'
    });
  }


  render() {
    const { currentCategory, favorites} = this.state;
    return (
      <div>
        <Navigation 
          updateCards={this.updateCards}
          displayFavorites={this.displayFavorites}
          favorites={favorites}
        />
        {currentCategory === 'films' &&
        <Landing 
          currentCategory={currentCategory}/> }
        <MainContainer 
          categoryData={this.state[currentCategory]}
          currentCategory={currentCategory}
          toggleFavorite={this.toggleFavorite}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default App;
