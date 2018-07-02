import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li>
        <Link to={routes.People}>
          People
        </Link>
      </li>
      <li>
        <Link to={routes.Planets}>
          Planets
        </Link>
      </li>
      <li>
        <Link to={routes.Vehicles}>
          Vehicles
        </Link>
      </li>
      <li>
        <Link to={routes.Favorites}>
          Favorites
          <span className="favorites-num">
          </span>
        </Link>
      </li>
    </ul>
  </div>;

export default Navigation;