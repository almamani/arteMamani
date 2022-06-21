import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos al Sitio Web de Arte Jujeño" />
    </div>
  );
}

export default App;
