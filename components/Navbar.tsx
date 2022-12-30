import { FC } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link"

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
        <h1>FALCO RODENBURG</h1>
      <ul>
        <Link href="#works"><li>Works</li></Link>
        <Link href="#about"><li>About</li></Link>
        <Link href="#contact"><li>Contact</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
