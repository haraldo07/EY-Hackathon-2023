import {Routes,Route} from 'react-router-dom';  
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
