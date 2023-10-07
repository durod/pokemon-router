import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import NavBar from "./components/Navbar";
import InfoPokemon from "./views/InfoPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemons" element={<Pokemons />} />
          <Route path="/Pokemons/:pokeName" element={<InfoPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
