import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <nav id="menu">
      <Link className="nav" to="/">
        Accueil
      </Link>
      <a className="nav" href="#Projets">
        Mes Projets
      </a>
      <a className="nav" href="#About">
        A propos
      </a>
    </nav>
  );
}

export default Nav;
