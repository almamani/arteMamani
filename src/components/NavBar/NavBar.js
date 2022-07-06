import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/category/Alfombras",
    name: "Alfombras",
  },
  {
    id: 3,
    path: "/category/Artesanias",
    name: "Artesanias",
  },
  {
    id: 4,
    path: "/category/Cuadros",
    name: "Cuadros",
  },
];

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">MariArt</h1>

      <div className="nav-items">
        <ul className="nav">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
