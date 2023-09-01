import React from "react";
import FooterPokeball from "../components/layout/FooterPokeball";
import { useDispatch } from "react-redux";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const nameTrainer = e.target.nameTrainer.value;
      dispatch(loginTrainer(nameTrainer));
      navigate("/pokedex");
   };
   return (
      <main className="min-h-screen grid grid-rows-[1fr_auto]">
         <section className="flex justify-center items-center text-center">
            <article>
               <div className="max-w-[670px]">
                  <img src="/images/banner.png" alt="" />
               </div>
               <h2 className="text-red-500 text-[50px] font-bold">
                  !Hello Trainer!
               </h2>
               <p className="text-[25px] ">To start, give me your name</p>
               <form onSubmit={handleSubmit} className="text-[25px]">
                  <input
                     className="bg-white shadow-md shadow-black/10  text-center sm:min-h-[48px]"
                     autoComplete="off"
                     placeholder="Your name..."
                     id="nameTrainer"
                     type="text"
                     required
                  />
                  <button className="bg-red-500 text-white min-w-[89px] sm:min-h-[48px] ">
                     Start
                  </button>
               </form>
            </article>
         </section>
         <FooterPokeball />
      </main>
   );
};

export default Home;
