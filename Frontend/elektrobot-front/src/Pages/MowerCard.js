import * as React from "react";
import "./MowerCard.css";
import { Link } from "react-router-dom";

const MowerCard = (props) => {
  const clickHandler = () =>{
    window.scrollTo(0,0)
  }
  const SetGlobalMower = () => {
    props.setClicked(props.mowerName);
   
  };
  const logProps = () => {
    console.log(props);
  };
  return (
    <div className="cardContainer" onClick={SetGlobalMower}>
      <img onClick={logProps} className="mowerImg" src={props.imgPath} alt="Brak obrazka"></img>
      <div className="mowerInfoContainer">
        <Link onClick={SetGlobalMower} className="link-style" to="/podglad">
          <p onClick={clickHandler} className="name">{props.mowerName}</p>
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
