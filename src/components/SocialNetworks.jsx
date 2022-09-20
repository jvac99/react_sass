import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialNetworks.sass";

const socialNetworks = [
  { name: "linkedin", link: "#", icon: <FaLinkedin /> },
  { name: "github", link: "#", icon: <FaGithub /> },
  { name: "instagram", link: "#", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(({ name, link, icon }) => (
        <a href={link} className="social-btn" id={name}>
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
