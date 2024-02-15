import React from "react";
import MowerCard from "../Components/MowerCard";
import "../Components/MowerCard.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import ShopTypeSwitchButton from "../Components/ShopTypeSwitchButton";
import "../Components/ShopTypeSwitchButton.css"

const Kontakt = () => {
  return (
    <div>
    
      <div className="test"></div>
      <Splide options={{ rewind: true, type: "loop", drag: "free", snap: true, perPage: "4", wheel: true, wheelSleep: "500"}}>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
     
          
      </Splide>

      <div className="test"></div>
    </div>
  );
};
export default Kontakt;
