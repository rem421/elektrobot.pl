import * as React from "react";
import "./MowerCard.css";
import { Link } from "react-router-dom";

const MowerCard = (props) => {
  const SetGlobalMower = () => {
    props.setClicked(props.mowerName);
   
  };
  const logProps = () => {
    console.log(props);
  };
  return (
    <div className="cardContainer" onClick={SetGlobalMower}>
      <img onClick={logProps} className="mowerImg" src="https://i.ibb.co/nsF9CZh/LUBA-2-AWD.jpg" alt="Brak obrazka"></img>
      <div className="mowerInfoContainer">
        <Link onClick={SetGlobalMower} to="/podglad">
          <p className="name">{props.mowerName}</p>
        </Link>

        <p className="additionalInfo">
          do {props.meters}m² - nachylenie - {props.nachylenie}
        </p>
      </div>
      <p className="price">{props.price}zł</p>
    </div>
  );
};
export default MowerCard;
