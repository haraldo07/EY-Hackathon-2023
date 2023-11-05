import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navi from './navbar';
import  Home  from './home';
import  About  from './about';
import Contact  from './contact';

function NextPage () {
  return (
    <div className="App">
        <Navi/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nextpage/about' element={<About/>}/>
          <Route path='/nextpage/contactus' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default NextPage;
