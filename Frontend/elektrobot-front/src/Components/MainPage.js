import React from "react";
import "./MainPage.css";
import "./ImageSection.css";

const MainPage = () => {
  return (
    <div className="mainPage">
        <img className="kosiara" src={require("./Images/Kosiara.jpg")} alt=""></img>
     
      <div className="imgSection">
        <div className="sectionLeft">
          <div className="textContainerLeft">
            Roboty koszące sprawnie dostosowują się do topografii ogrodu, eliminując konieczność manualnej interwencji. Bez względu na kształt, nachylenie czy przeszkody,
            gwarantujemy, że nasze roboty nie tylko poradzą sobie, ale także podniosą standard zaistniały na Twoim ogrodzie, zapewniając mu zawsze nienaganny wygląd.
          </div>
          <div className="imgContainerLeft">
            <img className="imgLeft" src={require("./Images/Kosiarajedzie.png")} alt=""></img>
          </div>
        </div>
        <div className="sectionLeft">
          <div className="imgContainerLeft">
            <img className="imgLeft" src={require("./Images/KosiaraFamiliowa.png")} alt=""></img>
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
            <img className="imgLeft" src={require("./Images/KosiaraZieleniara.png")} alt=""></img>
          </div>
        </div>
      </div>
      <img className="ofertaButton" src={require("./Images/Oferta.png")} alt=""></img>
      <img className="logoComment" src={require("./Images/AmbrogioComment.png")} alt=""></img>
      {/* <img className="footer" src={require("./Images/footer.png")} alt=""></img> */}
    </div>
  );
};
export default MainPage;
