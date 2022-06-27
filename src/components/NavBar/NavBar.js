import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">MariArt</h1>

      <div className="nav-items">
        <ul className="nav">
          <li className="nav-item">
            <a href="/">Cuadros</a>
          </li>
          <li className="nav-item">
            <a href="/">Esculturas</a>
          </li>
          <li className="nav-item">
            <a href="/">Artesanias</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
