import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialNetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jvac99/",
    icon: <FaLinkedin />,
  },
  { name: "github", link: "https://github.com/jvac99", icon: <FaGithub /> },
  { name: "instagram", link: "#", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(({ name, link, icon }) => (
        <a href={link} className="social-btn" id={name} target="_blank">
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
