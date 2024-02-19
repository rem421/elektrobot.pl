import React from "react";
import "@splidejs/react-splide/css";
import "../Components/ShopTypeSwitchButton.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Kontakt.css"


const Kontakt = (e) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_lgjzpxg";
    const formId = "template_m8f8gyr";
    const publicKey = "3HPMqXx7MNl_XUa8C";
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Łukasz",
      message: message,
    };
    emailjs
      .send(serviceId, formId, templateParams, publicKey)
      .then((response) => {
        console.log(`email sent succesfully: ${response}`);
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={HandleSubmit} action="#" className="login-form">
        <div className="input-box">
          <input type="text" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Imie" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="input-box">
          <input type="text" placeholder="wiadomość" onChange={(e) => setMessage(e.target.value)}></input>
        </div>
        <button type="submit" className="login-btn">Wyślij</button>
      </form>
    </div>
  );
};
export default Kontakt;
