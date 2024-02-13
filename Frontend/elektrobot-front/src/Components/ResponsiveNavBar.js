import * as React from "react";
import { useState } from "react";
import "./ResponsiveNavbar.css";

function ResponsiveNavBar() {
  const navbarButtons = ["Roboty koszące", "Usługi", "Akcesoria", "Kontakt"];
  const [menuOpen, SetMenuOpen] = useState(false);
  const ChangeMenuState = () => {
    SetMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <>
      {menuOpen ? (
        <nav className="menuOpen">
        <div className="navbarBarsContainer">
        <img onClick={ChangeMenuState} className="navbarBars" src={require("./bars.png")} alt="" />
        </div>
          
          <div className="navbarContainer">
            {navbarButtons.map((title) => {
              return <button className="navbarButton">{title}</button>;
            })}
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <img className="navbarLogo" src={require("./logo.png")} alt="" />
          <div className="navbarContainer">
            {navbarButtons.map((title) => {
              return <button className="navbarButton">{title}</button>;
            })}
          </div>
          <div className="icons">
            <img className="navbarBasket" src={require("./basket.png")} alt="" />
            <img className="navbarPerson" src={require("./person.png")} alt="" />
            <img onClick={ChangeMenuState} className="navbarBars" src={require("./bars.png")} alt="" />
          </div>
        </nav>
      )}
    </>
  );
}
export default ResponsiveNavBar;
