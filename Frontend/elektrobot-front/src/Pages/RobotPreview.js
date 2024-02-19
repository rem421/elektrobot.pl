import React, { useState, useEffect } from "react";
import "./RobotPreview.css";
import { Link } from "react-router-dom";

const RobotPreview = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    console.log(props.clicked);
  }, []);
  return (
    props.clicked && (
      <div className="pageContainer">
        <div className="preview">
          <div className="title-buy">
            <p className="robotTitle">Kup {props.clicked.Nazwa}</p>
            <p className="suggestedPrice">Cena już od {props.clicked.Cena} zł</p>
          </div>

          <div className="imgContainer">
            <img className="RobotPreviewImg" src={props.clicked.Img_path} alt=""></img>
          </div>
          <img className="mowerInfo" src={require("../Components/Images/tiles.png")} alt=""></img>
          <p className="sectionTitle"> Co cechuje roboty next line?</p>

          <div className="nextLineInfoContainer">
            <p className="tileTitle">Technologia baterii</p>
            <p className="tileDesc">
              Roboty te wykorzystują najnowocześniejsze akumulatory litowo-jonowe, które gwarantują długą niezależność od ładowania oraz stabilność pracy na przestrzeni wielu lat
              użytkowania. Ich zaletą jest także niska liczba cykli ładowania, co przekłada się na powolne zużycie baterii i długą żywotność. Dzięki tym innowacyjnym bateriom,
              użytkownicy mogą cieszyć się długotrwałą i niezawodną pracą robotów.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Efektywne cięcie</p>
            <p className="tileDesc">
              Noże robotów wykonane są z wysokiej jakości stali, co gwarantuje niezawodne i skuteczne cięcie trawy. Ich konstrukcja oraz prędkość pracy zapewniają doskonałą jakość
              koszenia, eliminując opadające szyszki, owoce czy gałęzie. Ponadto, noże wymagają jedynie okresowego czyszczenia, co przyczynia się do utrzymania ich trwałości i
              wydajności.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Wysoka wydajność</p>
            <p className="tileDesc">
              Roboty są wyjątkowo efektywne i pozostawiają ogród bez śladów swojej obecności przez większość dnia. Dzięki zaawansowanym algorytmom pracy oraz wydajnym bateriom, są
              w stanie utrzymać duże powierzchnie trawnika przy minimalnym czasie pracy. Oferują one użytkownikom komfort i oszczędność czasu przy pielęgnacji ogrodu.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Bezpieczeństwo użytkowania</p>
            <p className="tileDesc">
              Roboty są wyposażone w liczne zabezpieczenia, takie jak czujniki podniesienia, przechylenia, zderzenia oraz osłony noża. Dzięki temu, użytkownicy mogą być pewni, że
              urządzenia pracują w sposób bezpieczny dla otoczenia oraz dla samego użytkownika. Te środki bezpieczeństwa minimalizują ryzyko wystąpienia niepożądanych sytuacji
              podczas pracy robota.
            </p>
          </div>
          <div className="detailsContainer">
            <p className="specs">Specyfikacja</p>
            <div className="field">
              <table className="wholeTable">
                <tbody>
                  <tr>
                    <td className="firstTable"></td>
                    <td className="secondTable"></td>
                  </tr>
                  <tr>
                    <td className="firstTable">Rodzaj nawigacji</td>
                    <td className="secondTable">{props.clicked.Rodzaj_nawigacji}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Sterowanie za pomocą aplikacji</td>
                    <td className="secondTable">{props.clicked.Sterowanie_za_pomocą_aplikacji}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Maksymalna sugerowana powierzchnia m² (-20%)</td>
                    <td className="secondTable">{props.clicked.Maksymalna_sugerowana_powierzchnia}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Akumulator litowo-jonowy (25,9V)</td>
                    <td className="secondTable">{props.clicked.Akumulator_litowo_jonowy}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Średni czas pracy + -20%</td>
                    <td className="secondTable">{props.clicked.Średni_czas_pracy}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Maksymalne, dopuszczalne nachylenie zboczy (%)</td>
                    <td className="secondTable">{props.clicked.Maksymalne_dopuszczalne_nachylenie_zboczy}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Rodzaj noża</td>
                    <td className="secondTable">{props.clicked.Rodzaj_noża}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Szerokość noża (cm)</td>
                    <td className="secondTable">{props.clicked.Szerokość_noża}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Typ łączności</td>
                    <td className="secondTable">{props.clicked.Typ_łączności}</td>
                  </tr>
                  <tr>
                    <td className="firstTable">Panel sterowania</td>
                    <td className="secondTable">{props.clicked.Panel_sterowania}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {screenWidth > 768 && (
          <div className="summary">
            <p className="summaryText">Podsumowanie</p>
            <img className="summaryImg" src={require("../Components/Images/inProgress.png")} alt=""></img>
            <Link to="/kontakt" className="link-style">
              <p onClick={clickHandler} className="orderButton">
                Zapytaj o produkt
              </p>
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default RobotPreview;
