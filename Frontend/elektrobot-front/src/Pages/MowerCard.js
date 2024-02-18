import * as React from "react";
import "./MowerCard.css";


const MowerCard = (props) => {

  return (
    <div className="cardContainer">
      <img className="mowerImg" src="https://i.ibb.co/nsF9CZh/LUBA-2-AWD.jpg" alt="Brak obrazka"></img>
      <div className="mowerInfoContainer">
        <p className="name">{props.mowerName}</p>
        <p className="additionalInfo">do {props.meters}m² - nachylenie - {props.nachylenie}</p>
        <p className="additionalInfo">Rodzaj nawigacji: {props.nawigacja}</p>
      </div>
      <p className="price">{props.price}zł</p>
    </div>
  );
};
export default MowerCard;
