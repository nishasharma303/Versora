import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 text-center p-6 sm:p-8">
      
    
      <img src="/images/logo.png" alt="Versora Logo" className="w-32 sm:w-40 md:w-60 mb-3 sm:mb-4" />

    
      
      <p className="text-base sm:text-lg text-gray-800 max-w-2xl sm:max-w-3xl">
        Versora is more than just a collection of sentences. It's a space where thoughts find their perfect rhyme, 
        flowing with emotions. Here, each poem tells a story once buried deep in the heart—whispering feelings 
        and reminiscing about the moments we've left behind in this chaos.
      </p>

   
      <div className="mt-6 sm:mt-8 max-w-2xl sm:max-w-3xl text-gray-900 text-sm sm:text-lg text-left leading-relaxed bg-white/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">
          My Writing Journey
        </h2>
        <p>
          I always believed that writing was a born talent, something only a few were gifted with.  
          Seeing my friends effortlessly crafting beautiful poems, I felt inspired but also pressured.  
          I tried to force myself to write, but nothing felt right. The words didn’t flow, the emotions didn’t connect.  
          Disappointed, I convinced myself—"Maybe writing just isn’t my thing."
        </p>
        <br />
        <p>
          And then, one day, a random thought crossed my mind, and instead of ignoring it,  
          I picked up a pen. Memories flooded in, emotions surfaced, and before I knew it,  
          I had written my first poem. It wasn’t just words on paper—it was my heart speaking.  
          Excited and nervous, I shared it with my friends, my teacher, and everyone I knew.  
          Their reactions fueled something in me, and from that moment, I never stopped.
          My writing might not be very professional or refined, but these are the feelings I’ve tried to pour into verses.
        </p>
        <br />
        <h3 className="font-semibold text-sm sm:text-base">-Nisha Sharma</h3>
      </div>

      <button 
        onClick={() => navigate("/")}
        className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-full shadow-md transition-all"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default About;
