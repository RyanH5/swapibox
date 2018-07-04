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
import { selectCategory } from '../../helpers/selectCategory/index';

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

  updateCards = async (category) => {
    const selectedStarWarsData = await selectCategory(category);
    console.log(selectedStarWarsData);
    this.setState({
      [category]: selectedStarWarsData,
      currentCategory: category
    });
  }

  planetFetch = () => {
    const url = 'https://swapi.co/api/planets';
    fetchPlanetData(url)
      .then(planets => this.setState({planets}));
  }

  vehicleFetch = () => {
    const url = 'https://swapi.co/api/vehicles';
    fetchVehicles(url)
      .then(vehicles => this.setState({vehicles}));
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigation 
          planetFetch={this.planetFetch} 
          vehicleFetch={this.vehicleFetch}
          updateCards={this.updateCards}
        />
        <Landing /> 
      </div>
    );
  }
}

export default App;
