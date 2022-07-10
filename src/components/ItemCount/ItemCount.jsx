import React from "react";
import { useItem } from "../../hooks/useItem";

const ItemCount = ({ stock, onAdd }) => {
  const { count, amount } = useItem(stock);

  return (
    <>
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
        <button onClick={() => onAdd(amount)} className="btn btn-dark">
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
