import Avatar from "../img/joao.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Victor Aquino Correia" />
      <h2 className="name">João Victor Aquino Correia</h2>
      <div className="title">Software Developer at ViLT</div>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
