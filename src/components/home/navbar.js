import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="header">
      <div class="left">
        <a href="#">Oblivenigma</a>
      </div>
      <div class="mid">
        <ul class="navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
      <div class="right">
        <a href="#">Welcome</a>
      </div>
    </header>
  );
};
export default Navbar;
