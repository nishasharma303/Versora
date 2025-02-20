import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import poems from "../data/poems";
import { Link } from "react-router-dom";

const languages = ["Hindi", "English"];

const PoemCards = () => {
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

 
  const filteredPoems = poems.filter(
    (poem) => !selectedLanguage || poem.language === selectedLanguage
  );

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-6 sm:mb-8 mt-6 sm:mt-0">
        My Poems
      </h2>
      <h3 className="text-lg sm:text-2xl text-purple-600 text-center mb-6 sm:mb-8 italic">
        More feelings left to show, more stories left to be told...
      </h3>

     
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        {languages.map((language) => (
          <button
            key={language}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium shadow-md transition-all ${
              selectedLanguage === language
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-700 hover:bg-purple-500 hover:text-white"
            }`}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredPoems.length > 0 ? (
          filteredPoems.map((poem, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md p-3 sm:p-4 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedPoem(poem)}
            >
              <h3 className="text-lg sm:text-xl font-semibold">{poem.title}</h3>
              <h4 className="text-sm sm:text-lg mt-1 sm:mt-2 italic">{poem.tagline}</h4>
            </div>
          ))
        ) : (
          <p className="text-center text-purple-700 text-base sm:text-lg col-span-full">
            No poems found.
          </p>
        )}
      </div>

      {selectedPoem && (
        <Dialog
          open={!!selectedPoem}
          onClose={() => setSelectedPoem(null)}
          className="fixed inset-0 flex items-center justify-center bg-purple-300 bg-opacity-50 p-4"
        >
          <div className="bg-white/60 backdrop-blur-md bg-opacity-90 p-5 sm:p-6 rounded-lg max-w-sm sm:max-w-lg w-full shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{selectedPoem.title}</h3>

          
            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
              <p className="text-gray-800 whitespace-pre-line italic text-base sm:text-lg">
                {selectedPoem.content}
              </p>
            </div>

            <button
              className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={() => setSelectedPoem(null)}
            >
              Close
            </button>
          </div>
        </Dialog>
      )}

    
      <Link
        to="/"
        className="mt-6 sm:mt-8 inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-full shadow-md transition-all"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default PoemCards;
