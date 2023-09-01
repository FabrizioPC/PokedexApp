import React, { useEffect, useState } from "react";
import { getPokemonbyUrl, joinPokemonTypes } from "../../services/pokemons";
import StatList from "./StatList";
import {
   bgStylePokemonType,
   borderStyledPokemonByType,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonURL }) => {
   const [pokemonInfo, setPokemonInfo] = useState(null);

   useEffect(() => {
      getPokemonbyUrl(pokemonURL)
         .then((data) => setPokemonInfo(data))
         .catch((err) => console.log(err));
   }, []);
   return (
      <Link
         to={`/pokedex/${pokemonInfo?.id}`}
         className={`text-center capitalize border-[5px] rounded-md max-w-[265px]  ${
            borderStyledPokemonByType[pokemonInfo?.types[0]]
         }`}
      >
         <header
            className={`h-[80px]  relative mb-8 ${
               bgStylePokemonType[pokemonInfo?.types[0]]
            }`}
         >
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
               <img
                  className="h-full w-full object-contain"
                  src={
                     pokemonInfo?.image[0]
                        ? pokemonInfo?.image[0]
                        : pokemonInfo?.image[1]
                  }
                  alt=""
               />
            </div>
         </header>
         <section>
            <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
            <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
            <h5 className="text-sm mb-2">Types</h5>
            <hr />
            <StatList stats={pokemonInfo?.stats} />
         </section>
      </Link>
   );
};

export default PokemonCard;
