import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pokeard from "./pokeard";


const Character = () => {
  const [pokedex, setPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      axios
        .get("https://pokeapi.co/api/v2/type/")
        .then((res) => setType(res.data.results));
    } else {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => setPokedex(res.data.results));
    }
  }, [toggle]);

  
  const typePokemon = (e) => {
    const url = e.target.value;
    axios.get(url).then((res) => setPokedex(res.data.pokemon));
  };

 
  const navigate = useNavigate();
  const name = useSelector((state) => state.name);
  const [namePoke, setNamePoke] = useState("");
  const rutaPokemon = () => {
    navigate(`/character/${namePoke}`);
  };

  return (
    <div className="conteiner-character">
      <div className="conteiner-toggle">
        <h1>Bienvenido <b>{name}</b> aqui podras encontras tus kjjjj pokemon favorito</h1>
        <div>
        <input
          onClick={() => setToggle(true)}
          type="radio"
          id="options"
          name="option"
        />{" "}
        <label htmlFor="options"> type</label>
        <input
          onClick={() => setToggle(false)}
          type="radio"
          id="options2"
          name="option"
        />{" "}
        <label htmlFor="options2">Normal</label>
        </div>
        <div  className="conteiner-options">
          {toggle ? (
            <select onChange={typePokemon}>
              <option value="">Elige un type</option>
              {type.map((types) => (
                <option value={types.url}>{types.name}</option>
              ))}
            </select>
          ) : (
            <div>
              <label>
              <input list='pokemons' name='pokemons'
                placeholder='Search name'
                onChange={(e) => setNamePoke(e.target.value)}
                value={namePoke}
              /> <datalist id='pokemons' >
              {pokedex.map(pokemon =>(
                <option value={pokemon.name} key={pokemon.name}></option>
              ))}
            </datalist>
              <button onClick={rutaPokemon}>search pokemon</button>
            </label>
            </div>
          )}
        </div>
      </div>
      <div className="conteiner-pokecard">
        {pokedex.map((pokemon) => (

          <div key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
          <Pokeard
           
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
