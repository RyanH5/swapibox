import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import Landing from '../Landing/index';
import Navigation from '../../statelessComponents/Navigation/index';
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
      loading: false,
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
    const hasID = favorites.filter(fav => id === fav.id).length  === 1;
    if (hasID) {
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


  render() {
    return (
      <div>
        <Navigation 
          updateCards={this.updateCards}
        />
        {this.state.currentCategory === 'films' &&
        <Landing 
          currentCategory={this.state.currentCategory}/> }
        <MainContainer 
          categoryData={this.state[this.state.currentCategory]}
          currentCategory={this.state.currentCategory}
          toggleFavorite={this.toggleFavorite}
        />
      </div>
    );
  }
}

export default App;
