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
import * as routes from '../../statelessComponents/constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.Landing}
        component={() => <Landing />}
      />
      <Route
        exact path={routes.People}
        component={() => <People />}
      />
      <Route
        exact path={routes.Planets}
        component={() => <Planets />}
      />
      <Route
        exact path={routes.Vehicles}
        component={() => <Vehicles />}
      />
    </div>
  </Router>;

export default App;
