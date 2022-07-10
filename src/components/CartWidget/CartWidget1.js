import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import img_carrito from "../../assets/img/img_carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { qtyProducts } = useContext(cartContext);
  return (
    <div className="cart">
      <a href="/">
        <img src={img_carrito} alt="Icono Carrito" className="cart-imagen" />
      </a>
      <p className="cart-cantidad">{qtyProducts}</p>
    </div>
  );
};

export default CartWidget;
