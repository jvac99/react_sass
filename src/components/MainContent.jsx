import "../styles/components/mainContent.sass";
import AboutContainer from "./AboutContainer";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ExperienceContainer />
      <EducationContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
