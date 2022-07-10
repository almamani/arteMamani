import React, { useContext, useState } from "react";
import "./itemDetail.css";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [buyfinalized, setBuyFinalized] = useState(false);
  const { addCartProduct } = useContext(cartContext);

  const onAdd = (amount) => {
    addCartProduct({ ...product, cantidad: amount });
    setBuyFinalized(true);
  };

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
        <div>
          {buyfinalized ? (
            <Link to="/cart">
              <button className="btn btn-dark">Finalizar la Compra</button>
            </Link>
          ) : (
            <ItemCount stock={product.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
