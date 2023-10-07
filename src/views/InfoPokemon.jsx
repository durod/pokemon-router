import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function InfoPokemon() {
  const { pokeName } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    stats: [],
    type: [],
  });

  useEffect(() => {
    const infoPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}/`
        );
        const data = await response.json();
        setPokemon({
          name: data.name,
          img: data.sprites.other.dream_world.front_default,
          stats: data.stats,
          type: data.types,
        });
      } catch (error) {
        console.error("Error : ", error);
      }
    };

    infoPokemon();
  }, [pokeName]);

  const vuelveinicio = () => {
    navigate(`/Pokemons/`);
  };

  return (
    <main>
      <Card className="cajacard " border="danger">
        <Card.Img variant="top" src={pokemon.img} className="imgcardpokemon" />
        <div className="infopokemoncard">
          <Card.Body>
            <Card.Title className="namepokemoninfo">{pokemon.name}</Card.Title>
            <Card.Text>
              <ul>
                {pokemon.stats.map((stat, index) => (
                  <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
                <li className="tipoinfo">
                  {pokemon.type.map((type, index) => (
                    <span key={index} className="badge">
                      {type.type.name}
                    </span>
                  ))}
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <Button variant="danger" className="mt-5" onClick={vuelveinicio}>
        vuelve
      </Button>
    </main>
  );
}
