import axios from "axios";

export const getAllPokemons = async () => {
   //TODO Por ahora la vamos a dejar asi, solo trae 20 pokemons
   const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
   const { data } = await axios.get(URL);
   return data.results;
};
export const getAllTypes = async () => {
   const { data } = await axios.get("https://pokeapi.co/api/v2/type");
   return data.results;
};
export const getPokemonbyUrl = async (pokemonURL) => {
   const { data } = await axios.get(pokemonURL);
   const statsAbbreviated = abbreviatedStats(data.stats);

   const pokemon = {
      id: data.id,
      name: data.name,
      types: formatTypes(data.types),
      stats: formatStats(statsAbbreviated),
      image: [
         data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
         data.sprites.other["official-artwork"].front_default,
      ],
   };
   return pokemon;
};
export const getPokemonByType = async (pokemonType) => {
   const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
   const { data } = await axios.get(url);
   const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
   return formatPokemons;
};
export const getPokemonById = async (pokemonId) => {
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
   const { data } = await axios.get(url);
   const pokemon = {
      id: data.id,
      name: data.name,
      types: formatTypes(data.types),
      stats: formatStats(data.stats),
      image: [
         data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
         data.sprites.other["official-artwork"].front_default,
      ],
      weight: data.weight,
      height: data.height,
      abilities: data.abilities,
      moves: data.moves,
   };
   return pokemon;
};
const formatTypes = (types) => {
   return types.map((type) => type.type.name);
};
const formatStats = (stats) => {
   return stats.map((stat) => {
      return {
         name: stat.stat.name,
         value: stat.base_stat,
      };
   });
};
const abbreviatedStats = (statsOriginals) => {
   return statsOriginals.map((statOriginal) => {
      const abbreviateStatName = {
         "special-attack": "SpATK",
         "special-defense": "SpDEF",
      };
      const abbreviatedName =
         abbreviateStatName[statOriginal.stat.name] || statOriginal.stat.name;
      return {
         ...statOriginal,
         stat: {
            ...statOriginal.stat,
            name: abbreviatedName,
         },
      };
   });
};

export const joinPokemonTypes = (types = []) => {
   return types.slice(0, 2).join(" / ");
};
