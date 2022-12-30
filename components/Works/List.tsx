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

  const renderProjects = () => {
    if (projects) {
      return projects.map((item) => {
        return <li onClick={() => setActiveProjectIndex(item.id)} key={item.id} className={item.id == activeProjectIndex ? styles.activeItem : styles.listItem}>{item.name}</li>;
      });
    }
  };

  return (
    <div className={styles.projectlist}>
      <ul>{renderProjects()}</ul>
    </div>
  );
};

export default List;
