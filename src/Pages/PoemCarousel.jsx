import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const poems = [
  { id: 1, text: "Everything that is lost and buried in my heart, my soul has been singing for so long..." },
  { id: 2, text: "Lost like dew in the air of feelings and the thicket of thoughts, oh, I love being lost..." },
  { id: 3, text: "The warmth of hope, the fondness of peace, and the feeling of solitude..." },
  { id: 4, text: "Cherishing imperfections and embracing the scars.." },
  { id: 5, text: "A little wish to escape from reality..." },
];

const PoemCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? poems.length - 2 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= poems.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
     
      <h2 className="text-lg sm:text-2xl font-semibold italic text-purple-700 mb-15 text-center">
        ~ Echoes of Verse: A Glimpse into Words ~
      </h2>

     
      <div className="relative w-full flex items-center justify-center">
       
        <button
          className="absolute left-1 sm:left-4 p-2 sm:p-3 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={10} className="sm:size-1 md:size-8 lg:size-10" />
        </button>

     
        <div className="overflow-hidden w-full flex justify-center">
          <motion.div
            key={currentIndex}
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {poems.slice(currentIndex, currentIndex + 2).map((poem) => (
              <div
                key={poem.id}
                className="w-40 h-40 sm:w-50 sm:h-48 lg:w-75 lg:h-65 flex items-center justify-center 
                bg-purple-300 text-black sm:text-xs md:test-base lg:text-xl italic font-semibold rounded-xl shadow-lg 
                p-4 sm:p-6 transition-all"
              >
                {poem.text}
              </div>
            ))}
          </motion.div>
        </div>

       
        <button
          className="absolute right-1 sm:right-4 p-2 sm:p-3 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={10} className="sm:size-1 md:size-8 lg:size-10 " />
        </button>
      </div>
    </div>
  );
};

export default PoemCarousel;
