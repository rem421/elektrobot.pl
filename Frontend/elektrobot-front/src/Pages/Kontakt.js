import React from "react";
import "@splidejs/react-splide/css";
import "../Components/ShopTypeSwitchButton.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Kontakt = (e) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_agjwzg4";
    const formId = "template_taboqyd";
    const publicKey = "JQ7QjbScg34itLRkF";
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
    <form onSubmit={HandleSubmit} className="contactContainer">
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" placeholder="Imie" onChange={(e) => setName(e.target.value)}></input>
      <textarea type="text" placeholder="wiadomość" onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Wyślij</button>
    </form>
  );
};
export default Kontakt;
