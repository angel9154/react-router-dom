// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import { useParams } from 'react-router-dom'
// src/App.jsx
import { useState } from 'react';
import PokemonList from './components/PokemonList';
// src/App.jsx
import PokemonForm from './components/PokemonForm';

import NavBar from './components/NavBar';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
 
  const { pokemonId } = useParams();
 console.log('pokemonId:', pokemonId);

 const addPokemon = (newPokemonData) => {
  newPokemonData._id = pokemon.lenght + 1;
  setPokemon([...pokemon, newPokemonData])
 }

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
  <Route path="/pokemon" element= {<PokemonList pokemon={pokemon} />} />
  <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />
  <Route
    path="/pokemon/:pokemonId"
    element={<PokemonDetails pokemon={pokemon} />}
  />
      </Routes>
    </>
  );
};

export default App;

