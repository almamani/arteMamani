import React from "react";
import { useItem } from "../../hooks/useItem";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { count, amount } = useItem(product.stock);

  return (
    <div className="detail">
      <div>
        <img src={product.img} className="detail-img" alt={product.nombre} />
      </div>
      <div className="detail-product">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
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
        <div className="d-flex flex-row align-item-center justify-content-center mt-3">
          <button className="btn btn-dark">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
