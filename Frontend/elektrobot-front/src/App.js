import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "./App.css";

import ResponsiveNavBar from "./Components/ResponsiveNavBar";
import Footer from "./Components/Footer";
import jsonData from "./Pages/localization.json";
import Home from "./Pages/MainPage.js";
import NoPage from "./Pages/NoPage.js";
import Shop from "./Pages/Shop.js";
import Uslugi from "./Pages/Uslugi.js";
import Kontakt from "./Pages/Kontakt.js";
import RobotPreview from "./Pages/RobotPreview.js";
import { useEffect, useState } from "react";

function App() {
  const [mowerList, setMowerList] = useState([]);
  const [clickedMower, setClickedMower] = useState("");
  const [mowerData, setMowerData] = useState([]);
  useEffect(() => {
    setMowerList(jsonData);
    console.log(jsonData);
  }, []);
  useEffect(() => {
    console.log(clickedMower);
    if (clickedMower !== "" && mowerList.length > 0) {
      setMowerData(mowerList.find((mower) => mower.Nazwa === clickedMower));
      
    }
  }, [clickedMower]);
  useEffect((()=> {
    console.log(mowerData);
  }),[mowerData])
  const clickHandler = (mowerName) => {
    setClickedMower(mowerName);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveNavBar />
        <Routes>
          <Route index element={<Home setClicked={clickHandler} />} />
          <Route path="home" element={<Home setClicked={clickHandler} />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="podglad" element={<RobotPreview clicked={mowerData} />} />
          <Route path="sklep" element={<Shop setClicked={clickHandler} />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
