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
  let navigate = useNavigate();
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
      items: productsCart,
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
      html: `<p>Recibimos correctamente tu compra, el identificador de la misma es:<p>${idVenta}`,
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
    <div className="container-form mt-5">
      <div className="row">
        <form className="card card-body" onSubmit={handleSubmit}>
          <h2>Ingresa tus Datos</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingrese Nombre"
              name="nombre"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingrese Apellido"
              name="apellido"
              onChange={handleInputChange}
              required
            />
            <input
              type="e_mail"
              className="form-control mb-3"
              placeholder="Ingrese Email"
              name="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn btn-dark">Enviar Compra</button>
        </form>
      </div>
    </div>
  );
};

export default Venta;
