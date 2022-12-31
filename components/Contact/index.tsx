import { FC } from "react";
import styles from "../../styles/Home.module.css";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact me!</h1>
      <p>
        I'm always open to discuss new ideas and explore interesting collaborations and
        opportunities.
      </p>
      <button>Get in touch</button>
    </div>
  );
};

export default Contact;
