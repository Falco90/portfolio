import { FC } from "react";
import styles from "../../styles/Home.module.css";
import Project from "../../types/Project";

type Props = {
  projects: Project[] | undefined;
  activeProjectIndex: number;
  setActiveProjectIndex: Function
};

const List: FC<Props> = (props) => {
  const { projects, activeProjectIndex, setActiveProjectIndex } = props;

  const renderProjects = (category: string) => {
    if (projects) {
      return projects.filter(item => item.category == category).map((item) => {
        return <li onClick={() => setActiveProjectIndex(item.id)} key={item.id} className={item.id == activeProjectIndex ? styles.activeItem : styles.listItem}>{item.name}</li>;
      });
    }
  };

  return (
    <div className={styles.projectlist}>
      <h3>Live</h3>
      <ul>{renderProjects("live")}</ul>
      <h3>Hackathons</h3>
      <ul>{renderProjects("hackathon")}</ul>
    </div>
  );
};

export default List;
