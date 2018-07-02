import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import Landing from '../Landing/index';
import Navigation from '../../statelessComponents/Navigation/index';
import People from '../../statelessComponents/People/index';
import Vehicles from '../../statelessComponents/Vehicles/index';
import Planets from '../../statelessComponents/Planets/index';
import Favorites from '../../statelessComponents/Favorites/index';
import * as routes from '../../helpers/constants/routes';

const App = () =>
  <div>
    <Navigation />
    <Landing /> 
  </div>;

export default App;
