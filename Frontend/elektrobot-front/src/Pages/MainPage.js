import React from "react";
import "./MainPage.css";
import "./ImageSection.css";
import MowerCard from "./MowerCard";
import "./MainPage.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import jsonData from "./localization.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MainPage = (props) => {
  const [kosiaraDetails, setKosiaraDetails] = useState([]);
  const [mammotionMowers, setMammotionMowers] = useState([]);
  const [husqvarnaMowers, setHusqvarnaMowers] = useState([]);
  const [ambrogioMowers, setAmbrogioMowers] = useState([]);
  const [loadValue, setLoadValue] = useState(0)
  useEffect(() => {
    setKosiaraDetails(jsonData);
    console.log(props);
  }, []);
  useEffect(() => {
    if (kosiaraDetails.length > 0) {
      setMammotionMowers(kosiaraDetails.filter((mower) => mower.Marka === "Mammotion"));
      setHusqvarnaMowers(kosiaraDetails.filter((mower) => mower.Marka === "Husqvarna"));
      setAmbrogioMowers(kosiaraDetails.filter((mower) => mower.Marka === "Ambrogio"));
    }
  }, [kosiaraDetails]);

  function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 2) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue;

      let delay = Math.floor(Math.random() * 50) + 50;
      setTimeout(updateCounter, delay);
    }
    updateCounter();
  }
  useGSAP(() => {
    startLoader();

    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power3.out",
    });

    gsap.from(".h1", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.from(".hero", 2, {
      delay: 4.5,
      y: 400,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="mainPage">
      <h1 class="counter">0</h1>
      <div class="overlay">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <div class="container">
        <div class="header">
          <div class="h1">E</div>
          <div class="h1">L</div>
          <div class="h1">E</div>
          <div class="h1">K</div>
          <div class="h1">T</div>
          <div class="h1">R</div>
          <div class="h1">O</div>
          <div class="h1">B</div>
          <div class="h1">O</div>
          <div class="h1">T</div>
        </div>
      </div>
      <div class="hero">
        <img className="kosiara" src={require("../Components/Images/Kosiara.png")} alt=""></img>
      </div>

      <img className="logoComment top" src={require("../Components/Images/AmbrogioComment.png")} alt=""></img>
      <p className="desc">Cześć, jestem Ambrogio – Innowacyjny, a przy tym łatwy w użyciu robot koszący Made in Italy</p>
      {ambrogioMowers.length > 0 && (
        <Splide
          options={{
            pagination: false,
            autoHeight: true,
            arrows: false,
            speed: "1500",
            width: "70vw",
            drag: "free",
            snap: true,
            perPage: "3",
            wheel: true,
            wheelSleep: "500",
          }}
        >
          {ambrogioMowers.map((mower) => {
            return (
              <SplideSlide>
                <MowerCard
                  setClicked={props.setClicked}
                  price={mower.Cena}
                  imgPath={mower.Img_path}
                  mowerName={mower.Nazwa}
                  meters={mower.Maksymalna_sugerowana_powierzchnia}
                  nachylenie={mower.Maksymalne_dopuszczalne_nachylenie_zboczy}
                  nawigacja={mower.Rodzaj_nawigacji}
                ></MowerCard>
              </SplideSlide>
            );
          })}
        </Splide>
      )}

      <Link className="allProducts link-style" to="/sklep">
        <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
      </Link>
      <div className="dash"></div>

      <img className="logoComment" src={require("../Components/Images/mammotion.png")} alt=""></img>
      <p className="desc">Mammotion – Niezwykle uniwersalny, nie wymagający kabla.</p>
      {mammotionMowers.length > 0 && (
        <Splide
          options={{
            pagination: false,
            autoHeight: true,
            arrows: false,
            speed: "1500",
            width: "70vw",
            drag: "free",
            snap: true,
            perPage: "3",
            wheel: true,
            wheelSleep: "500",
          }}
        >
          {mammotionMowers.map((mower) => {
            return (
              <SplideSlide>
                <MowerCard
                  setClicked={props.setClicked}
                  price={mower.Cena}
                  imgPath={mower.Img_path}
                  mowerName={mower.Nazwa}
                  meters={mower.Maksymalna_sugerowana_powierzchnia}
                  nachylenie={mower.Maksymalne_dopuszczalne_nachylenie_zboczy}
                  nawigacja={mower.Rodzaj_nawigacji}
                ></MowerCard>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
      <Link to="/sklep" className="allProducts link-style">
        <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
      </Link>

      <div className="dash"></div>

      <img className="logoComment" src={require("../Components/Images/husqvarna.png")} alt=""></img>
      <p className="desc">Husqvarna – Jakość, której zaufały miliony</p>
      {husqvarnaMowers.length > 0 && (
        <Splide
          options={{
            pagination: false,
            autoHeight: true,
            arrows: false,
            speed: "1500",
            width: "70vw",
            drag: "free",
            snap: true,
            perPage: "3",
            wheel: true,
            wheelSleep: "500",
          }}
        >
          {husqvarnaMowers.map((mower) => {
            return (
              <SplideSlide>
                <MowerCard
                  setClicked={props.setClicked}
                  price={mower.Cena}
                  imgPath={mower.Img_path}
                  mowerName={mower.Nazwa}
                  meters={mower.Maksymalna_sugerowana_powierzchnia}
                  nachylenie={mower.Maksymalne_dopuszczalne_nachylenie_zboczy}
                  nawigacja={mower.Rodzaj_nawigacji}
                ></MowerCard>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
      <Link to="/sklep" className="allProducts link-style">
        <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
      </Link>
      <div className="dash"></div>
      <div className="imgSection">
        <div className="sectionLeft">
          <div className="textContainerLeft">
            Roboty koszące sprawnie dostosowują się do topografii ogrodu, eliminując konieczność manualnej interwencji. Bez względu na kształt, nachylenie czy przeszkody,
            gwarantujemy, że nasze roboty nie tylko poradzą sobie, ale także podniosą standard zaistniały na Twoim ogrodzie, zapewniając mu zawsze nienaganny wygląd.
          </div>
          <div className="imgContainerLeft">
            <img className="imgLeft" src={require("../Components/Images/Kosiarajedzie.png")} alt=""></img>
          </div>
        </div>
        <div className="sectionLeft adjust">
          <div className="imgContainerLeft">
            <img className="imgLeft" src={require("../Components/Images/KosiaraFamiliowa.png")} alt=""></img>
          </div>
          <div className="textContainerLeft second">
            Ciesz się większą ilością wolnego czasu na rzeczy, które naprawdę kochasz! Oszczędź godziny, które dotychczas poświęcałeś na koszenie, pozwalając inteligentnemu
            robotowi zadbać o Twój ogród. To nie tylko zakup, to inwestycja w czas i spokój ducha – teraz możesz skupić się na rodzinie, hobby czy relaksie, zamiast pracować w
            ogrodzie.
          </div>
        </div>
        <div className="sectionLeft">
          <div className="textContainerLeft">
            Z ogromnym wyborem modeli automatycznych robotów koszących u nas dostępnych, każdy znajdzie idealny sprzęt dopasowany do potrzeb. Bez względu na rozmiar ogrodu, od
            małych przestrzeni po rozległe tereny, istnieje model dedykowany do efektywnego koszenia praktycznie każdej wielkości obszaru.
          </div>
          <div className="imgContainerLeft bottom">
            <img className="imgLeft" src={require("../Components/Images/KosiaraZieleniara.png")} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
