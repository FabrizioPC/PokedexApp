import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { bgStylePokemonType } from "../shared/pokemon";

const PokemonDetail = () => {
   const [pokemonData, setPokemonData] = useState(null);
   const { pokemonId } = useParams();
   useEffect(() => {
      getPokemonById(pokemonId)
         .then((data) => setPokemonData(data))
         .catch((err) => console.log(err));
   }, []);
   return (
      <main className="flex flex-col items-center justify-center ">
         <article className=" w-[1116px]  border-[2px] ">
            <header
               className={`h-[100px] relative mb-8 ${
                  bgStylePokemonType[pokemonData?.types[0]]
               }`}
            >
               <div className="min-w-[150px] absolute left-1/2 -translate-x-1/2 -bottom-7 h-[100px] aspect-square">
                  <img
                     className="h-full w-full "
                     src={
                        pokemonData?.image[0]
                           ? pokemonData?.image[0]
                           : pokemonData?.image[1]
                     }
                     alt=""
                  />
               </div>
            </header>
            <section className="m-5 p-1 flex flex-col justify-center items-center text-center text-lg  ">
               <span>#{pokemonData?.id}</span>
               <h2 className="text-2xl capitalize font-bold">
                  {pokemonData?.name}
               </h2>
               <div className="flex space-x-10 p-2">
                  <p className="text-xs ">
                     Weight
                     <br />
                     {pokemonData?.weight}
                  </p>
                  <p className="text-xs">
                     Height
                     <br />
                     {pokemonData?.height}
                  </p>
               </div>
               <section className="grid px-4 gap-4 grid-cols-4 grid-rows-2">
                  <h3 className="col-span-2 row-span-1 font-medium text-xl">
                     Type
                  </h3>
                  <h3 className="col-span-2 row-span-1 font-medium text-xl">
                     Abilities
                  </h3>
                  {pokemonData?.types.map((type) => (
                     <p
                        key={type}
                        className={`text-white capitalize ${
                           bgStylePokemonType[type]
                        } ${
                           pokemonData?.types.length === 1
                              ? "col-span-2"
                              : "col-span-1"
                        } row-span-1`}
                     >
                        {type}
                     </p>
                  ))}
                  {pokemonData?.abilities.map((abilitie) => (
                     <p
                        key={abilitie.ability.url}
                        className={`capitalize font-medium text-sm border-[1px]  ${
                           pokemonData?.abilities.length === 1
                              ? "col-span-2"
                              : "col-span-1"
                        } row-span-1`}
                     >
                        {abilitie.ability.name}
                     </p>
                  ))}
               </section>
               <StatBarList stats={pokemonData?.stats} />
            </section>
         </article>
         <article className=" w-[1116px]  border-[2px] flex justify-center ">
            <section className="">
               <h2 className="text-2xl p-4">Movements</h2>
               <ul className="flex flex-wrap p-4">
                  {pokemonData?.moves.map((move) => (
                     <li
                        key={move.move.url}
                        className="bg-gray-600 text-white m-2 p-2 border-[1px] rounded-lg text-lg"
                     >
                        {move.move.name}
                     </li>
                  ))}
               </ul>
            </section>
         </article>
      </main>
   );
};

export default PokemonDetail;
