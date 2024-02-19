import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footerBody">
      <div className="upperSection">
        <img className="logo" src={require("./Images/logo.png")} alt=""></img>
        
        <div className="linkContainer">
          <Link className="link-style" to="/home">
            <p onClick={clickHandler} className="link">Roboty koszące</p>
          </Link>
          <Link className="link-style" to="/uslugi">
            <p onClick={clickHandler} className="link">Usługi</p>
          </Link>
          <Link className="link-style" to="/sklep">
            <p onClick={clickHandler} className="link">Sklep</p>
          </Link>
          <Link className="link-style" to="/kontakt">
            <p onClick={clickHandler} className="link">Kontakt</p>
          </Link>
        </div>
      </div>
      <div className="middleLine"></div>
      <div className="bottomSection">
        <div className="contactContainer">
          <p className="contact">Telefon: +48 513 775 645</p>
          <p className="contact">Mail: roboty@zielonemarzenia.pl</p>
          <p className="contact">Adres: Adama Mickiewicza 66, 32-650 Kęty</p>
        </div>
        <div className="contactField">
          <p className="fieldText">Kontakt</p>
          <img className="arrow" src={require("./Images/Arrow.png")} alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default Footer;
