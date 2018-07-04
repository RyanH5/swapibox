import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../helpers/constants/routes';

const Navigation = (props) => {
  return (
    <div>
    <button onClick={() => props.fetchByUserSelect()}>People</button>
      <button onClick={() => props.planetFetch()}>Planets</button>
      <button>Vehicles</button>  
      <button>Favorites<span></span></button>  
    </div>
  );
};

  
export default Navigation;
// <div>
//   <ul>
//     <li>
//       <NavLink to={routes.People}>
//         People
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to={routes.Planets}>
//         Planets
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to={routes.Vehicles}>
//         Vehicles
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to={routes.Favorites}>
//         Favorites
//         <span className="favorites-num">
//         </span>
//       </NavLink>
//     </li>
//   </ul>
// </div>;