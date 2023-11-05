import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/navbar';

import About from './components/pages/about';
import Essays from './components/pages/essays';
import Projects from './components/pages/projects';



function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
