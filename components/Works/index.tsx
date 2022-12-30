import { FC, useState, useEffect } from "react";
import Display from "./Display";
import List from "./List";
import styles from "../../styles/Home.module.css";
import Project from "../../types/Project";
import axios from "axios";

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const fetchProjects = async () => {
    const response = await axios.get("/api/projects");
    setProjects(response.data);
  };

  useEffect(() => {
    fetchProjects();
  });

  return (
    <main>
      <div className={styles.projectscontainer}>
        <List
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
        />
        <Display
          project={projects ? projects[activeProjectIndex] : undefined} 
        />
      </div>
    </main>
  );
};

export default Projects;
