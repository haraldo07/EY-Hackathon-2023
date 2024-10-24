// Import necessary styles and components
import './components/css_44oLwG-lnktJQH4C0UNHm5BWP_WV9-0aqQK8QWfxMKY.css';
import './components/css_F1VrrsS2NCryPeJgZEIbBvtZx0Ctu9toFHDlp287jWI.css';
import './components/css_Y4H_4BqmgyCtG7E7YdseTs2qvy9C34c51kBamDdgark.css';
import './components/css_YHC0F8KAMxDvuTBs6VI2m-2qcEyKli1OBSmvtj-qANc.css';
import NavBar from './components/NavBar';
import MainComp from './pages/MainComp';
import AboutUs from './pages/AboutUs';
import Impact from './pages/Impact';
import Careers from './pages/Careers';
import Investors from './pages/Investors';
import FooterComp from './components/FooterComp';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; // Import React Router components

// Define the main App function
function App() {
  return (
    // Creating browser router for routing
    <BrowserRouter>
      <NavBar />
      <Routes> {/*Switch case like tag for routing */}
        <Route path="/" element={<MainComp />} /> {/* Home Routing */}
        <Route path="/our-company" element={<AboutUs />} /> {/* Refering the routing path as the id given in the corresponding jsx file */}
        <Route path="/overview" element={<Investors />} />
        <Route path="/careers-overview" element={<Careers />} />
        <Route path="/our-impact" element={<Impact />} />
        <Route path="*" element={<MainComp />} /> {/* Default case */}
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App; // exporting app

// Bonus Questions:

/* 
    -> The company has a data science role, Digital Marketing Analyst and Financial Analyst
    -> The company runs a family of restaurants with full service dining.
    -> Their requirements are Strong knowledge of Excel and excellent analtycal skills
    -> Yes. They rank 402 in Fortune 500 and currently own more than 1900 restaurants in North America. Even their stock value is positive. 
    -> Yes, AI & DS will disrupt the sector. Analytics play a very important role in the stock market of this company.
    -> Right now, they only have Financial Analyst. If they try to use Analytics in real estate, they could buy excellent restaurants at a low cost.
    -> No. I am more interested in Sports field. Even if the company give me loads of oppurtunities, I would prefer my favourite field.
*/