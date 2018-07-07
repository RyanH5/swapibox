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
        <Landing 
          currentCategory={this.state.currentCategory}/> 
        <MainContainer 
          categoryData={this.state[this.state.currentCategory]}
          currentCategory={this.state.currentCategory}
        />
      </div>
    );
  }
}

export default App;
