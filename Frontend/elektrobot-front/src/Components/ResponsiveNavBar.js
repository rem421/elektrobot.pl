import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./ResponsiveNavbar.css";

function ResponsiveNavBar() {
  const [menuOpen, SetMenuOpen] = useState(false);
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  const ChangeMenuState = () => {
    SetMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <>
      {menuOpen ? (
        <nav className="menuOpen">
          <div className="navbarBarsContainer">
            <img onClick={ChangeMenuState} className="navbarBars" src={require("./Images/bars.png")} alt="" />
          </div>

          <div className="navbarContainer">
            <Link className="navbarButton" to="/home">
              <li onClick={clickHandler} className="navbarButton">Roboty koszące</li>
            </Link>
          <Link  className="navbarButton" to="/sklep">
              <li onClick={clickHandler} className="navbarButton">Sklep</li>
            </Link>
            <Link className="navbarButton" to="/uslugi">
              <li onClick={clickHandler}  className="navbarButton">Usługi</li>
            </Link>
            <Link className="navbarButton" to="/kontakt">
              <li onClick={clickHandler}  className="navbarButton">Kontakt</li>
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <img className="navbarLogo" src={require("./Images/logo.png")} alt="" />
           
          <div className="navbarContainer">
            <Link className="navbarButton" to="/sklep">
              <li className="navbarButton">Roboty koszące</li>
            </Link>
            <Link className="navbarButton" to="/sklep">
              <li className="navbarButton">Akcesoria</li>
            </Link>
            <Link className="navbarButton" to="/uslugi">
              <li className="navbarButton">Usługi</li>
            </Link>
            <Link className="navbarButton" to="/kontakt">
              <li className="navbarButton">Kontakt</li>
            </Link>
          </div>
          <div className="icons">
            {/* <img className="navbarBasket" src={require("./Images/basket.png")} alt="" /> */}
            {/* <img className="navbarPerson" src={require("./Images/person.png")} alt="" /> */}
            <img onClick={ChangeMenuState} className="navbarBars" src={require("./Images/bars.png")} alt="" />
          </div>
        </nav>
      )}
    </>
  );
}
export default ResponsiveNavBar;
