import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="Nuestros Productos" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route
          path="/detail/:id"
          element={<ItemDetailContainer mensaje="Nuestros Productos" />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
