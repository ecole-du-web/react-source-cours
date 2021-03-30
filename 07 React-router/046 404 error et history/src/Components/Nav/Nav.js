import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav-list">

      <NavLink exact activeClassName="current" to="/">
        <li>Accueil</li>
      </NavLink>

      <NavLink exact activeClassName="current" to="/Projets">
        <li>Projets</li>
      </NavLink>

      <NavLink exact activeClassName="current" to="/Contact">
        <li>Contact</li>
      </NavLink>
      
    </ul>
  );
}
