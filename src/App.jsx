import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Herosection from "./Pages/Herosection";
import PoemCards from "./Pages/PoemCards";
import About from "./Pages/About"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/poemcards" element={<PoemCards />} />
        <Route path="/about" element={<About />} />  
      </Routes>
    </Router>
  );
};

export default App;
