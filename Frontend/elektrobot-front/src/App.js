import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';

import ResponsiveNavBar from './Components/ResponsiveNavBar';
import Footer from './Components/Footer';

import Home from './Components/MainPage';
import Kontakt from './Pages/Kontakt';
import RobotPreview from './Pages/RobotPreview';
import NoPage from './Pages/NoPage';
import Shop from './Pages/Shop';
import Uslugi from './Pages/Uslugi';



function App() {
  return (
    <div className="App">
     <ResponsiveNavBar/>
     <BrowserRouter> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="podglad" element={<RobotPreview />} />
          <Route path="sklep" element={<Shop />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
