import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">MariArt</h1>

      <div className="nav-items">
        <a href="/" className="nav-item">
          Cuadros
        </a>
        <a href="/" className="nav-item">
          Esculturas
        </a>
        <a href="/" className="nav-item">
          Artesanias
        </a>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
