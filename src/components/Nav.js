import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink exact to="/airplane">
          Airplane
        </NavLink>
      </li>
      <li>
        <NavLink to="/train">Train</NavLink>
      </li>
      <li>
        <NavLink to="/automobile">Automobile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
