import React from "react";
import { useNavigate } from "react-router-dom";
import PoemCarousel from "./PoemCarousel";

const Herosection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400">
      
     
      <nav className="w-full py-3 px-6 sm:py-3 sm:px-6 md:py-4 md:px-8 flex justify-center items-center absolute top-0">
       
        <div className="flex space-x-6 sm:space-x-8 md:space-x-10 text-lg sm:text-xl font-semibold">
          <button onClick={() => navigate("/")} className="text-black hover:text-purple-400 hover:tracking-widest transition-all duration-300">Home</button>
          <button onClick={() => navigate("/about")} className="text-purple-700 hover:text-purple-400 hover:tracking-widest transition-all duration-300">About</button>
          <button onClick={() => navigate("/poemcards")} className="text-black hover:text-purple-400 hover:tracking-widest transition-all duration-300">Category</button>
        </div>
      </nav>

      
      <div className="flex flex-col md:flex-row flex-grow items-center justify-center px-4 sm:px-6 md:px-16 space-y-6 sm:space-y-8 md:space-y-0 md:space-x-6 mt-16 sm:mt-20 mb-16 sm:mb-20">
        
      
        <div className="flex flex-col space-y-3 sm:space-y-4 max-w-lg text-center md:text-left">
          
         
          <div className="flex justify-center md:justify-start">
            <img src="/images/logo.png" alt="Versora Logo" className="w-32 sm:w-48 md:w-60" />
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold italic md:w-250">
            <span className="text-purple-700">Where thoughts find solace,</span>{" "}
            <span className="text-black">and words <br /></span>{" "}
            <span className="text-gray-600">become </span>{" "}
            <span className="text-black"> a path to</span>{" "}
            <span className="text-purple-700"> escape... <br /></span>{""}
            <span className="text-black">Let the verse </span>{""}
            <span className="text-purple-700">whisper, <br /></span>{""}
            <span className="text-gray-600">your untold tale.</span>{" "}
          </p>

          <br />

          <p className="text-lg sm:text-xl md:text-2xl italic text-gray-800">
            "Lost in thoughts, let the unspoken words echo, <br />
            find a piece of you, and let emotions flow.."
          </p>
        </div>

        
        <img src="/images/quil.png" alt="Feather" className="w-36 sm:w-64 md:w-80 lg:w-[28rem] mx-auto md:mr-4 lg:mr-12 mt-8 sm:mt-10" />
      </div>

     
      <div className="mt-16 sm:mt-20 mb-4 sm:mb-6 flex flex-col items-center">
        <PoemCarousel />

        
        <button 
        onClick={() => navigate("/poemcards")}
        className="mt-8 sm:mt-12 mb-8 sm:mb-10 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-full shadow-md transition-all flex items-center gap-2"
        >
          Explore More →
          </button>
      </div>

      
      <footer className="w-full py-3 text-center text-gray-700 font-semibold text-sm sm:text-base">
        © 2025 Versora | Created by <span className="text-purple-700">Nisha Sharma</span>
      </footer>

    </div>
  );
};

export default Herosection;
