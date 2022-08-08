import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("carritoMariArt"));
    setProductsCart(localData);
  }, []);

  useEffect(() => {
    getQtyCarProducts();
    getTotalProducts();
    localStorage.setItem("carritoMariArt", JSON.stringify(productsCart));
  }, [productsCart]);

  const addCartProduct = (product) => {
    if (isInCart(product.id)) {
      const found = productsCart.find((producto) => producto.id === product.id);
      const index = productsCart.indexOf(found);
      const aux = [...productsCart];
      aux[index].cantidad += product.cantidad;
      setProductsCart(aux);
    } else {
      setProductsCart([...productsCart, product]);
    }
  };

  const deleteCartProduct = (id) => {
    const aux = productsCart.filter((productCart) => productCart.id !== id);
    setProductsCart(aux);
  };

  const isInCart = (id) => {
    return productsCart.some((productCar) => productCar.id === id);
  };

  const getQtyCarProducts = () => {
    let qty = 0;
    productsCart.forEach((productCart) => (qty += productCart.cantidad));
    setQtyProducts(qty);
  };

  const getTotalProducts = () => {
    let total = 0;
    productsCart.forEach(
      (productCart) => (total += productCart.cantidad * productCart.precio)
    );
    setTotalProducts(total);
  };

  const clearCart = () => {
    setProductsCart([]);
    setQtyProducts(0);
    setTotalProducts(0);
  };

  return (
    <Provider
      value={{
        productsCart,
        addCartProduct,
        deleteCartProduct,
        clearCart,
        qtyProducts,
        totalProducts,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartCustomProvider;
