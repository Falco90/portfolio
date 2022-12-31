import { FC } from "react";
import styles from "../styles/Home.module.css";

type Props = {
  section: number;
  setSection: Function;
};

const Navbar: FC<Props> = (props) => {
  const { setSection, section } = props;

  return (
    <div className={styles.navbar}>
      <h1 onClick={() => setSection(0)}>FALCO RODENBURG</h1>
      <ul>
        <li
          onClick={() => setSection(1)}
          className={section == 1 ? styles.navbarActive : styles.navbarItem}
        >
          Projects
        </li>
        <li
          onClick={() => setSection(2)}
          className={section == 2 ? styles.navbarActive : styles.navbarItem}
        >
          About
        </li>
        <li
          onClick={() => setSection(3)}
          className={section == 3 ? styles.navbarActive : styles.navbarItem}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
