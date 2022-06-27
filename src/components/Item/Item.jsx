import React from "react";
import { useItem } from "../../hooks/useItem";
import "./Item.css";

const Item = ({ product }) => {
  const { count, amount } = useItem(product.stock);

  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={product.img} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-precio">
          $ <span>{product.precio}</span>
        </p>
        <p className="card-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div className="card-amount d-flex flex-row align-item-center display-3 justify-content-center">
          <button onClick={() => count(-1)} className="btn btn-dark  display-3">
            -
          </button>
          <span className="d-flex flex-row  p-2">{amount}</span>
          <button onClick={() => count(+1)} className="btn btn-dark display-3">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
