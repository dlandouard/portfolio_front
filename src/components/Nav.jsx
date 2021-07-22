import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./Nav.css";

function Nav() {
  return (
    <nav id="menu">
      <HashLink className="nav" to="/#">
        Accueil
      </HashLink>
      <HashLink className="nav" to="/#Projets">
        Mes projets
      </HashLink>
      <HashLink className="nav" to="/#About">
        A propos
      </HashLink>
    </nav>
  );
}

export default Nav;
