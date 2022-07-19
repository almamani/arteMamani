import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ productList }) => {
  console.log(productList);
  return (
    <div className="container">
      <div className="row contenedor-articulos">
        {productList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
