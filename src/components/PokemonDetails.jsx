import React from "react";
import { useParams } from 'react-router-dom'
// src/components/PokemonDetails.jsx

const PokemonDetails = (props) => {
   const { pokemonId } = useParams();
   const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId));
   console.log('Pokemon Object:', singlePokemon)
// src/components/PokemonDetails.jsx
return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
  
  };
  
  export default PokemonDetails;
  