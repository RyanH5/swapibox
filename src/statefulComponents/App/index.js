import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import Landing from '../Landing/index';
import Navigation from '../../statelessComponents/Navigation/index';
import { fetchPeople, fetchPlanetData } from '../../helpers/fetch/index';
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

  fetchByUserSelect = () => {
    const url = 'http://swapi.co/api/people';
    fetchPeople(url)
      .then(people => this.setState({people}));
  }

  planetFetch = () => {
    const url = 'https://swapi.co/api/planets';
    fetchPlanetData(url);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigation 
          fetchByUserSelect={this.fetchByUserSelect} 
          planetFetch={this.planetFetch} 
        />
        <Landing /> 
      </div>
    );
  }
}

export default App;
