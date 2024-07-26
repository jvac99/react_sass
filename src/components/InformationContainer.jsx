import "../styles/components/informationContainer.sass";

import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import InfoCard from "./InfoCard";

const informationCards = [
  {
    id: "e-mail",
    title: "E-mail",
    content: "jvac99@hotmail.com",
    icon: <AiOutlineMail id='email-icon' />,
  },
  {
    id: "telefone",
    title: "Telefone",
    content: "(88) 99834-4005",
    icon: <AiFillPhone id='phone-icon' />,
  },
  {
    id: "localizacao",
    title: "Quixadá / CE",
    content: "jvac99@hotmail.com",
    icon: <AiFillEnvironment id='pin-icon' />,
  },
];

const InformationContainer = () => {
  return (
    <section id='information'>
      {informationCards.map(({ id, title, content, icon }) => (
        <InfoCard title={title} content={content} icon={icon} key={id} />
      ))}
    </section>
  );
};

export default InformationContainer;
