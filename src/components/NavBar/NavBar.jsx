import React, { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categorias");
    getDocs(categoriesCollection)
      .then((result) => {
        const listCategories = result.docs.map((category) => {
          return {
            id: category.id,
            ...category.data(),
          };
        });
        setCategoriesList(listCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="nav">
      <h1 className="nav-logo">MariArt</h1>

      <div className="nav-items">
        <ul className="nav">
          {categoriesList.map((category) => (
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
