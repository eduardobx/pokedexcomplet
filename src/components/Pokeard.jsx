import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Pokeard = ({ url }) => {
  const [pokeCard, setPokeCard] = useState({});
  useEffect(() => {
    axios.get(url)
    .then((res) => setPokeCard(res.data));
  }, []);

  console.log(pokeCard);

  return (
    <div className="card-pokemon">
    <div className="conteiner-habilites">
      <Link to={`/character/${pokeCard.name}`}>
        <img 
          className="poke-cards"
          src={pokeCard.sprites?.front_default
          }
          alt=""
        />
        </Link>
       
      <h1>{pokeCard.name}</h1>
      <h2></h2>
      </div>
      
    </div>
  );
};

export default Pokeard;
