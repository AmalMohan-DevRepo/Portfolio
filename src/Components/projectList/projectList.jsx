import "./projectList.css";
import Project from "../project/project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          These are some of the projects that I have developed as part of my web dev preperation.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((item) => (
          <Project key={item.id} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
