import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
   getAllPokemons,
   getAllTypes,
   getPokemonByType,
} from "../services/pokemons";

//? Separacion de lógica componente Pokedex.jsx
const usePokedex = () => {
   const [pokemons, setPokemons] = useState([]);
   const [pokemonName, setPokemonName] = useState("");
   const [pokemonType, setPokemonType] = useState("");
   const [types, setTypes] = useState([]);
   const { name } = useSelector((store) => store.trainer);

   const handleChange = (setState) => (e) => {
      setState(e.target.value);
   };
   const pokemonsByName = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
   );
   useEffect(() => {
      if (!pokemonType) {
         getAllPokemons()
            .then((data) => setPokemons(data))
            .catch((err) => console.log(err));
      }
   }, [pokemonType]);
   useEffect(() => {
      if (pokemonType) {
         getPokemonByType(pokemonType).then((data) => setPokemons(data));
      }
   }, [pokemonType]);
   useEffect(() => {
      getAllTypes()
         .then((types) => setTypes(types))
         .catch((err) => console.log(err));
   }, []);
   return {
      name,
      pokemonName,
      setPokemonName,
      pokemonType,
      setPokemonType,
      pokemonsByName,
      handleChange,
      types,
   };
};

export default usePokedex;
