import React from "react";
import "./MainPage.css";
import "./ImageSection.css";
import MowerCard from "./MowerCard";
import "./MainPage.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import jsonData from "./localization.json";
import { useEffect, useState } from "react";
const MainPage = (props) => {
  const [kosiaraDetails, setKosiaraDetails] = useState([]);
  const [mammotionMowers, setMammotionMowers] = useState([]);
  const [husqvarnaMowers, setHusqvarnaMowers] = useState([]);
  const [ambrogioMowers, setAmbrogioMowers] = useState([]);
  useEffect(() => {
    setKosiaraDetails(jsonData);
    console.log(props)
  }, []);
  useEffect(() => {
    if (kosiaraDetails.length > 0) {
      setMammotionMowers(kosiaraDetails.filter((mower) => mower.Marka === "Mammotion"));
      setHusqvarnaMowers(kosiaraDetails.filter((mower) => mower.Marka === "Husqvarna"));
      setAmbrogioMowers(kosiaraDetails.filter((mower) => mower.Marka === "Ambrogio"));
    }
  }, [kosiaraDetails]);
  return (
    <div className="mainPage">
      <img className="kosiara" src={require("../Components/Images/Kosiara.jpg")} alt=""></img>
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
            Ciesz się większą ilością wolnego czasu na rzeczy, które naprawdę kochasz! Oszczędź godziny, które dotychczas poświęcałeś na koszenie trawy, pozwalając inteligentnemu
            robotowi zadbać o Twój ogród. To nie tylko zakup, to inwestycja w swój czas i spokój ducha – teraz możesz skupić się na rodzinie, hobby czy relaksie, zamiast pracować w
            ogrodzie.
          </div>
        </div>
        <div className="sectionLeft">
          <div className="textContainerLeft">
            Z ogromnym wyborem modeli automatycznych robotów koszących u nas dostępnych, każdy znajdzie idealny sprzęt dopasowany do swoich potrzeb. Bez względu na rozmiar ogrodu,
            od małych przestrzeni po rozległe tereny, istnieje model dedykowany do efektywnego koszenia praktycznie każdej wielkości obszaru.
          </div>
          <div className="imgContainerLeft">
            <img className="imgLeft" src={require("../Components/Images/KosiaraZieleniara.png")} alt=""></img>
          </div>
        </div>
      </div>
      <img className="ofertaButton" src={require("../Components/Images/Oferta.png")} alt=""></img>

      <img className="logoComment" src={require("../Components/Images/AmbrogioComment.png")} alt=""></img>
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

      <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
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
      <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
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
      <p className="allProducts">Zobacz wszystkie produkty &#10095;</p>
      <div className="dash"></div>
    </div>
  );
};
export default MainPage;
