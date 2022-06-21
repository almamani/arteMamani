import React from "react";
import "./styles.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="mensaje">
      <span>{mensaje} </span>
    </div>
  );
};

export default ItemListContainer;
