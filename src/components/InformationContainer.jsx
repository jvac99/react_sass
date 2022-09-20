import React from "react";

import "../styles/components/informationContainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import InfoCard from "./InfoCard";

const InformationContainer = () => {
  return (
    <section id="information">
      <InfoCard
        title="E-mail"
        content="email@hotmail.com"
        icon={<AiOutlineMail id="email-icon" />}
      />
      <InfoCard
        title="Telefone"
        content="(88)900000000"
        icon={<AiFillPhone id="phone-icon" />}
      />
      <InfoCard
        title="Localização"
        content="Quixadá / CE"
        icon={<AiFillEnvironment id="pin-icon" />}
      />
    </section>
  );
};

export default InformationContainer;
