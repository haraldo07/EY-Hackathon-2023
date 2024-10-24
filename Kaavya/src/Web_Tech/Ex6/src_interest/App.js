// importing packages and components

import React from "react";
import SimpInt from './components/SimpInt';
import CompInt from "./components/CompInt";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes, Route } from 'react-router-dom'; // Import React Router components


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* routing */}
      <Routes>
      <Route path="/simpint" element={<SimpInt />} />
      <Route path="/compint" element={<CompInt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
