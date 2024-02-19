import React from "react";
import ShopHeroSection from "../Components/ShopHeroSection.js";
import { useState, useEffect } from "react";
import jsonData from "./localization.json";
import MowerCard from "./MowerCard.js";
import "./Shop.css"
const Shop = (props) => {
  const [kosiaraDetails, setKosiaraDetails] = useState([]);
  useEffect(() => {
    setKosiaraDetails(jsonData);
  }, []);
  return (
    <div className="shopContainer">
      <ShopHeroSection></ShopHeroSection>
      <div className="cardsContainer">
       
          {kosiaraDetails.length > 0 &&
            kosiaraDetails.map((mower) => {
              return (
                
                  <MowerCard
                    setClicked={props.setClicked}
                    price={mower.Cena}
                    imgPath={mower.Img_path}
                    mowerName={mower.Nazwa}
                    meters={mower.Maksymalna_sugerowana_powierzchnia}
                    nachylenie={mower.Maksymalne_dopuszczalne_nachylenie_zboczy}
                    nawigacja={mower.Rodzaj_nawigacji}
                  ></MowerCard>
               
              );
            })}
       
      </div>
    </div>
  );
};
export default Shop;
