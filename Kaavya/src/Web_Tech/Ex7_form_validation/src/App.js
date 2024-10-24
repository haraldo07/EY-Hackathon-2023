import './App.css';
import RedirectPage from './components/redirect';
import Index from './components/mainpage';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path='/redirect' element={<RedirectPage />}/>
      </Routes>
      </div>
  );
}

export default App;
