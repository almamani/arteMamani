import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

import Swal from "sweetalert2";
import "./Venta.css";

const Venta = () => {
  const { productsCart, totalProducts, clearCart } = useContext(cartContext);
  const [idVenta, setIdVenta] = useState("");
  const navigate = useNavigate();
  const initialSatateValues = {
    nombre: " ",
    apellido: " ",
    email: " ",
  };

  const [values, setValues] = useState(initialSatateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const datosComprador = values;

  const finalizarVenta = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      datosComprador,
      items: productsCart.map((product) => ({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      })),
      fecha: serverTimestamp(),
      total: totalProducts,
    }).then((result) => {
      setIdVenta(result.id);
    });

    productsCart.forEach((product) => {
      const updateCollection = doc(db, "productos", product.id);
      updateDoc(updateCollection, { stock: product.stock - product.cantidad });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarVenta();
  };

  const buySend = () => {
    Swal.fire({
      icon: "success",
      title: "Confirmación",
      confirmButtonColor: "#BB1111",
      html: `<p>Recibimos correctamente tu compra, en breve nos comunicaremos para acordar pago y entrega, el identificador de la compra es:<p>${idVenta}`,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        return navigate("/");
      }
    });
  };

  useEffect(() => {
    if (idVenta) {
      buySend();
    }
  }, [idVenta]);

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Ingresá tus Datos</h2>
      <input
        type="text"
        className="Input"
        placeholder="Ingrese Nombre"
        name="nombre"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        className="Input"
        placeholder="Ingrese Apellido"
        name="apellido"
        onChange={handleInputChange}
        required
      />
      <input
        type="e_mail"
        className="Input"
        placeholder="Ingrese Email"
        name="email"
        onChange={handleInputChange}
        required
      />
      <button className="btn btn-dark formSubmit">Enviar Compra</button>
    </form>
  );
};

export default Venta;
