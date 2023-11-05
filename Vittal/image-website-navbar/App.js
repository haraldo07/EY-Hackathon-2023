import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Address from './components/adddress';
import Phone from './components/phone';
import Email from './components/email';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/contact/phone' element={<Phone/>}/> 
        <Route path='/contact/address' element={<Address/>}/> 
        <Route path='/contact/emailid' element={<Email/>}/> 
      </Routes>
    </div>
  );
}

export default App;
