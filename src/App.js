import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { HashRouter, Route, Routes } from "react-router-dom";
import CartCustomProvider from "./context/CartContext";

function App() {
  return (
    <HashRouter>
      <CartCustomProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje="Nuestros Productos" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </HashRouter>
  );
}

export default App;
