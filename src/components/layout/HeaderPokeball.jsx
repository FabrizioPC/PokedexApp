import React from "react";
import { Link } from "react-router-dom";
import { logoutTrainer } from "../../store/slices/trainer.slice";
import { useDispatch } from "react-redux";

const HeaderPokeball = ({ children }) => {
   const dispatch = useDispatch();
   const handleLogout = () => {
      dispatch(logoutTrainer());
   };
   return (
      <section>
         <header>
            <div className="h-16 bg-red-600 relative">
               <Link to={"/pokedex"}>
                  <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
                     <img src="/images/banner.png" alt="" />
                  </div>
               </Link>
            </div>
            <div className="h-12 bg-black relative">
               <button
                  onClick={handleLogout}
                  className="h-16 aspect-square rounded-full bg-white absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-black  transition-colors hover:bg-red-500 cursor-pointer "
               >
                  <div className="flex justify-center items-center ">
                     <img
                        className="w-[80%]"
                        src="/images/logoutIcon.svg"
                        alt=""
                     />
                  </div>
               </button>
            </div>
         </header>
         {children}
      </section>
   );
};

export default HeaderPokeball;
