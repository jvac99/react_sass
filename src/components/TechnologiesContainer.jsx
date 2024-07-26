import "../styles/components/technologiesContainer.sass";

import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";

const technologies = [
  { id: "html", name: "Html5", icon: <DiHtml5 /> },
  { id: "css", name: "Css3", icon: <DiCss3 /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "vue", name: "Vue.js", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "mongo", name: "MongoDb", icon: <DiMongodb /> },
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech, key) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
