import React, { useState, useEffect } from "react";
import "./RobotPreview.css";
import jsonData from "./localization.json"

const RobotPreview = () => {
  const [kosiaraDetails, setKosiaraDetails] = useState(null);

  useEffect(() => {
    setKosiaraDetails(jsonData);
  }, []);


  return (
    <div className="pageContainer">
      <div className="preview">
        <div>
          <p className="robotTitle">Kup "Nazwa Robota"</p>
          <p className="suggestedPrice"></p>
        </div>

        <div className="imgContainer">
          <img className="mowerImg" src={require("../Components/Images/buyMower.png")} alt=""></img>
        </div>
        <img className="mowerInfo" src={require("../Components/Images/tiles.png")} alt=""></img>
        <p> Co cechuje roboty next line?</p>
        <div className="nextLineInfoContainer">
          <p className="title">Baterie</p>
          <p className="desc">Roboty ZCS wyposażone są w najnowocześniejsze akumulatory litowo-jonowe. Niezrównana samodzielność i czas pracy na jednym cyklu ładowania naszych robotów pozwala pracować nawet 10 godzin non stop. Stosowanie mocnych, wydajnych ogniw gwarantuje niską liczbę cykli ładowania baterii zatem ich powolne zużycie i długą, stabilną pracę przez kilka lat.</p>
        </div>
        <div className="nextLineInfoContainer">
          <p className="title">Moc cięcia</p>
          <p className="desc">Roboty ZCS jako jedyne na świecie posiadają prawdziwe noże, naostrzone dwustronnie wykonane z wysokogatunkowej elastycznej stali. 4 lub 8 ramienne szerokości od 25 do 36 cm. Podczas pracy noże osiągają prędkość nawet do 4 tys RPM, zapewniając niezrównaną jakość cięcia każdego trawnika, a przy okazji z powodzeniem radzą sobie z opadającymi szyszkami, owocami czy gałęziami. Nie wymagają regularnej wymiany, jedynie okresowego czyszczenia.</p>
        </div>
        <div className="nextLineInfoContainer">
          <p className="title">Wydajność</p>
          <p className="desc">Bezkompromisowa moc cięcia w połączeniu z zaawansowanymi algorytmami pracy, potężnymi bateriami oraz doskonałymi właściwościami jezdnymi sprawiają iż roboty ZCS pracują wyjątkowo wydajnie pozostawiając ogród „wolnym od robota” przez większość dnia. Najmniejsze modele potrzebują ok 3 godzin dziennie aby utrzymać 1000 mkw trawnik, większe jednostki osiągają wydajność nawet ponad 1000mkw/h. Wysoka wydajność pozwala robotom przerwać pracę kiedy ich czujniki rozpoznają deszcz (zależne od preferowanych ustawień użytkownika). Trawa tak bardzo nie lubi być koszona w deszczu…</p>
        </div>
        <div className="nextLineInfoContainer">
          <p className="title">Technologia i doświadczenie</p>
          <p className="desc">ZCS samodzielnie projektuje i produkuje roboty od blisko 20 lat. Posiadamy kompletną ofertę kilkudziesięciu robotów, gotowych skosić każdy trawnik. Lata doświadczeń, liczne patenty i ciągłe innowacje pozwalają pracować w najtrudniejszych ogrodach, spełniając oczekiwania najbardziej wymagających klientów. Polityka stałego wsparcia i aktualizacji sprzedanych urządzeń, sprawia iż technologiczne starzeją się one wyjątkowo wolno i wyjątkowo długo służą naszym klientom.</p>
        </div>
        <div className="nextLineInfoContainer">
          <p className="title">Bezpieczeństwo</p>
          <p className="desc">Roboty ZCS spełniają wszystkie, najbardziej restrykcyjne normy bezpieczeństwa. Zabezpieczone kodem PIN, wyposażone w czujniki podniesienia, czujniki przechylenia, czujniki zderzenia, osłony noża, wyłącznik awaryjny STOP minimalizują ryzyko niepożądanych zdarzeń. Nie bez znaczenia jest wysoka moc i wydajność która gwarantuje najkrótszy czas pracy robota i pozostawia ogród do dyspozycji właściciela kiedy tylko jest taka potrzeba.</p>
        </div>
      </div>
      <div className="detailsContainer">
        <p className="specs">Specyfikacja</p>
        <div className="field">
          <p className="header">DANE TECHNICZNE</p>
          <table>
            <tr>
              <td>{kosiaraDetails["2"].Nazwa}</td>
              <td>{kosiaraDetails["2"].Cena}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="summary">Zamawiam</div>
    </div>
  );
};
export default RobotPreview;
