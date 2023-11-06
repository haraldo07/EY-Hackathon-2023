import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './components/Approuter';
import NexttPage from './components/NextPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppRouter />} />
        <Route path="/nextpage" element={<NexttPage />} />
        <Route path="/prevpage" element={<AppRouter />} />
      </Routes>
    </div>
  );
}

export default App;
