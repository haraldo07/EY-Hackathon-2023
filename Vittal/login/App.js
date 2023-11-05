import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import NextPage from './components/nextpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/nextpage" element={<NextPage/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
