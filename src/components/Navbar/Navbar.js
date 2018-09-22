import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar">
    <ul>
        <li className="list-item">
          <a href="/click-game/">Clicky Game!</a>
        </li>
        <li className="list-item">         
          Click an image to begin!          
        </li>
        <li className="list-item">
          Score: {props.currentScore} | Top Score: {props.topScore}
        </li>
      </ul>
  </nav>
);

export default Navbar;
