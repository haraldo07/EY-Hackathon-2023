import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Newuser from './components/newuser';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/newuser' element={<Newuser/>}/>
          <Route path='/nextpage' element={<Home/>}/>
          <Route path='/nextpage/about' element={<About/>}/>
          <Route path='/nextpage/contact' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
