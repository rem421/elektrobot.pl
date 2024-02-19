import React, { useState, useEffect } from "react";
import "./RobotPreview.css";
import { Link } from "react-router-dom";

const RobotPreview = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
            <img className="RobotPreviewImg" src="https://i.ibb.co/nsF9CZh/LUBA-2-AWD.jpg" alt=""></img>
          </div>
          <img className="mowerInfo" src={require("../Components/Images/tiles.png")} alt=""></img>
          <p className="sectionTitle"> Co cechuje roboty next line?</p>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Baterie</p>
            <p className="tileDesc">
              Roboty ZCS wyposażone są w najnowocześniejsze akumulatory litowo-jonowe. Niezrównana samodzielność i czas pracy na jednym cyklu ładowania naszych robotów pozwala
              pracować nawet 10 godzin non stop. Stosowanie mocnych, wydajnych ogniw gwarantuje niską liczbę cykli ładowania baterii zatem ich powolne zużycie i długą, stabilną
              pracę przez kilka lat.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Moc cięcia</p>
            <p className="tileDesc">
              Roboty ZCS jako jedyne na świecie posiadają prawdziwe noże, naostrzone dwustronnie wykonane z wysokogatunkowej elastycznej stali. 4 lub 8 ramienne szerokości od 25 do
              36 cm. Podczas pracy noże osiągają prędkość nawet do 4 tys RPM, zapewniając niezrównaną jakość cięcia każdego trawnika, a przy okazji z powodzeniem radzą sobie z
              opadającymi szyszkami, owocami czy gałęziami. Nie wymagają regularnej wymiany, jedynie okresowego czyszczenia.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Wydajność</p>
            <p className="tileDesc">
              Bezkompromisowa moc cięcia w połączeniu z zaawansowanymi algorytmami pracy, potężnymi bateriami oraz doskonałymi właściwościami jezdnymi sprawiają iż roboty ZCS
              pracują wyjątkowo wydajnie pozostawiając ogród „wolnym od robota” przez większość dnia. Najmniejsze modele potrzebują ok 3 godzin dziennie aby utrzymać 1000 mkw
              trawnik, większe jednostki osiągają wydajność nawet ponad 1000mkw/h. Wysoka wydajność pozwala robotom przerwać pracę kiedy ich czujniki rozpoznają deszcz (zależne od
              preferowanych ustawień użytkownika). Trawa tak bardzo nie lubi być koszona w deszczu…
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Technologia i doświadczenie</p>
            <p className="tileDesc">
              ZCS samodzielnie projektuje i produkuje roboty od blisko 20 lat. Posiadamy kompletną ofertę kilkudziesięciu robotów, gotowych skosić każdy trawnik. Lata doświadczeń,
              liczne patenty i ciągłe innowacje pozwalają pracować w najtrudniejszych ogrodach, spełniając oczekiwania najbardziej wymagających klientów. Polityka stałego wsparcia
              i aktualizacji sprzedanych urządzeń, sprawia iż technologiczne starzeją się one wyjątkowo wolno i wyjątkowo długo służą naszym klientom.
            </p>
          </div>
          <div className="nextLineInfoContainer">
            <p className="tileTitle">Bezpieczeństwo</p>
            <p className="tileDesc">
              Roboty ZCS spełniają wszystkie, najbardziej restrykcyjne normy bezpieczeństwa. Zabezpieczone kodem PIN, wyposażone w czujniki podniesienia, czujniki przechylenia,
              czujniki zderzenia, osłony noża, wyłącznik awaryjny STOP minimalizują ryzyko niepożądanych zdarzeń. Nie bez znaczenia jest wysoka moc i wydajność która gwarantuje
              najkrótszy czas pracy robota i pozostawia ogród do dyspozycji właściciela kiedy tylko jest taka potrzeba.
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
                    <td className="firstTable">Maksymalne nachylenie zboczy (%)</td>
                    <td className="secondTable">{props.clicked.Maksymalne_nachylenie_zboczy}</td>
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
            <Link to="/kontakt">
            <p className="orderButton">Zapytaj o produkt</p>

            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default RobotPreview;
