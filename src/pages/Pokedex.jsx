import React, { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const {
      name,
      pokemonName,
      setPokemonName,
      pokemonType,
      setPokemonType,
      pokemonsByName,
      handleChange,
      types,
   } = usePokedex();

   const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
      pokemonsByName,
      currentPage
   );
   return (
      <main>
         <section>
            <p className="text-2xl p-2">
               <span className="text-red-500">Welcome {name}</span>,here you can
               find your favorite pokemon
            </p>
            <form>
               <div>
                  <input
                     className="border-[2px] m-2"
                     value={pokemonName}
                     onChange={handleChange(setPokemonName)}
                     placeholder="Search pokemon..."
                     type="text"
                  />

                  <select
                     className="border-[2px]"
                     value={pokemonType}
                     onChange={handleChange(setPokemonType)}
                  >
                     <option value="">All pokemons</option>
                     {types.map((type) => (
                        <option
                           key={type.name}
                           value={type.name}
                           className="capitalize"
                        >
                           {type.name}
                        </option>
                     ))}
                  </select>
               </div>
            </form>
         </section>
         <Pagination
            lastPage={lastPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
         />
         <PokemonList pokemons={itemsInCurrentPage} />
      </main>
   );
};

export default Pokedex;
