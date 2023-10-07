import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Pokemons() {
  const [pokeName, setpokeName] = useState("");
  const [namesPokemones, setNamesPokemones] = useState([]);
  const navigate = useNavigate();

  const handleSelectChange = ({ target }) => {
    setpokeName(target.value);
  };

  useEffect(() => {
    const selectList = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await response.json();
        const namesPoke = data.results.map((poke) => poke.name);
        setNamesPokemones(namesPoke);
      } catch (error) {
        console.error("Error : ", error);
      }
    };
    selectList();
  }, []);

  const pokeInfo = () => {
    if (pokeName === "") {
      alert("Por favor selecciona un pokemon.");
    } else {
      navigate(`/Pokemons/${pokeName}`);
    }
  };

  return (
    <div className="cajasvistapokemons">
      <div>
        <h2>Selecciona un pokemon</h2>
      </div>
      <div className="cajaselect">
        <Form.Select
          size="lg"
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option value="1">Pokemones</option>
          {namesPokemones.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </Form.Select>
        <Button variant="dark" className="mt-5" onClick={pokeInfo}>
          Detalle
        </Button>
      </div>
    </div>
  );
}
