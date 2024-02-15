import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';

import ResponsiveNavBar from './Components/ResponsiveNavBar';
import Home from './Components/MainPage';
import Footer from './Components/Footer';

import Kontakt from './Pages/Kontakt';



function App() {
  return (
    <div className="App">
     <ResponsiveNavBar/>
     <Router>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
         
        </Routes>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;