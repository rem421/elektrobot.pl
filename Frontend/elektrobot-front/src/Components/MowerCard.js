import * as React from "react";
import "./MowerCard.css";

const MowerCard = () => {
  return (
    <div className="cardContainer">
      <img className="mowerImg" src={require("./Images/KosiaraNaKarte.png")} alt=""></img>
      <div className="mowerInfoContainer">
        <p className="name">Seria TWENTY ZR</p>
        <p className="additionalInfo">do 1000m² - nachylenie - 45%</p>
      </div>
      <p className="price">22,000zł</p>
    </div>
  );
};
export default MowerCard;
