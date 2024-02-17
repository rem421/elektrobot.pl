import React from "react";
import MowerCard from "../Components/MowerCard";
import "../Components/MowerCard.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../Components/ShopTypeSwitchButton.css";

const Kontakt = () => {
  return (
    <div>
      <div className="test"></div>
      <Splide
        options={{
          pagination: false,
          autoHeight: true,
          arrows: false,
          rewind: true,
          speed: "1500",
          type: "loop",
          drag: "free",
          snap: true,
          perPage: "3",
          wheel: true,
          wheelSleep: "500",
        }}
      >
        <SplideSlide>
          <MowerCard />
        </SplideSlide>
        
      </Splide>

      <div className="test"></div>
    </div>
  );
};
export default Kontakt;
