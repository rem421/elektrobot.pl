import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "./App.css";

import ResponsiveNavBar from "./Components/ResponsiveNavBar";
import Footer from "./Components/Footer";

import Home from "./Pages/MainPage.js";
import NoPage from "./Pages/NoPage.js";
import Shop from "./Pages/Shop.js";
import Uslugi from "./Pages/Uslugi.js";
import Kontakt from "./Pages/Kontakt.js";
import RobotPreview from "./Pages/RobotPreview.js";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ResponsiveNavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="kontakt" element={<Kontakt/>} />
          <Route path="podglad" element={<RobotPreview/>} />
          <Route path="sklep" element={<Shop />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
