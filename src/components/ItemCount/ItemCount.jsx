import React from "react";
import "./ItemCount.css";
import { useItem } from "../../hooks/useItem";



const ItemCount = ({ stock, onAdd }) => {
  const { count, amount } = useItem(stock);

  return (
    <>
      <div className="amount-button-op">
        <button onClick={() => count(-1)} className="btn btn-dark">
          -
        </button>
        <span className="amount-qt">{amount}</span>
        <button onClick={() => count(+1)} className="btn btn-dark">
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
