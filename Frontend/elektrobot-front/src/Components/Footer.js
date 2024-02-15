import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footerBody">
      <div className="upperSection">
        <img className="logo" src={require("./Images/logo.png")} alt=""></img>
        <div className="linkContainer">
            <p className="link">Roboty koszące</p>
            <p className="link">Usługi</p>
            <p className="link">Akcesoria</p>
            <p className="link">Profil</p>
            <p className="link">FAQ</p>
        </div>
      </div>
      <div className="middleLine"></div>
      <div className="bottomSection">
        <div className="contactContainer">
            <p className="contact">Telefon: +48 999 999 999</p>
            <p className="contact">Mail: Elektrobot@gmail.com</p>
            <p className="contact">Adres: Biuro 12A/6</p>
        </div>
        <div className="contactField">
            <p className="fieldText"></p>
            <img src={require("./Images/Arrow.png")} alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default Footer;
