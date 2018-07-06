import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import Landing from '../Landing/index';
import Navigation from '../../statelessComponents/Navigation/index';
import { fetchPlanetData, fetchVehicles } from '../../helpers/fetch/index';
import { getData } from '../../helpers/selectCategory/index';
import {getCategory} from '../../helpers/selectCategory/index'

// import People from '../../statelessComponents/People/index';
// import Vehicles from '../../statelessComponents/Vehicles/index';
// import Planets from '../../statelessComponents/Planets/index';
// import Favorites from '../../statelessComponents/Favorites/index';
// import * as routes from '../../helpers/constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      loading: false,
      currentCategory: ''
    };
  }

  updateCards = async (url) => {
    const selectedStarWarsData = await getData(url);
    const category = getCategory(url)
    this.setState({
      [category]: selectedStarWarsData,
      currentCategory: category
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigation 
          updateCards={this.updateCards}
        />
        <Landing /> 
      </div>
    );
  }
}

export default App;
