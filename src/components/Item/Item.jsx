import React from "react";

import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-precio">
          $ <span>{product.precio}</span>
        </p>
        <p className="card-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div className="d-flex flex-row align-item-center justify-content-center">
          <button className="btn btn-dark">Ver Detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
