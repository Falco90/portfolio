import { FC } from "react";
import styles from "../styles/Home.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
        <h1>FALCO RODENBURG</h1>
      <ul>
        <li>/ Works</li>
        <li>/ About</li>
        <li>/ Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
