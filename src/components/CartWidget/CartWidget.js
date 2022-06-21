import React from "react";
import img_carrito from "../../assets/img/img_carrito.png";
import "./styles.css";

const cartWidget = () => {
  return (
    <a href="/" className="ico-carrito">
      <img src={img_carrito} alt="Icono Carrito" className="cart-widget" />
    </a>
  );
};
export default cartWidget;
