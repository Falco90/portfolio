import { FC } from "react";
import styles from "../../styles/Home.module.css";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutText}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et similique itaque ea provident nulla dolorem laudantium est labore tenetur. Quas eligendi labore culpa perferendis dolorum, perspiciatis esse? Nemo sunt nobis tempore, dolore reiciendis ab cupiditate ipsum, iusto nulla molestiae sint, quaerat recusandae necessitatibus. Recusandae repudiandae, eligendi nulla corrupti veniam ut eaque harum id magni dolor atque aspernatur numquam error dolorem?
        </p>
      </div>
      <div className={styles.bio}>
        <h1>Bio</h1>
        <div>
        <ul>
            <li><span>1990</span><p>Born in Wirdum, The Nederlands</p></li>
            <li><span>2015</span> Completed Master's degree in Psychology at Rijksuniversiteit Groningen</li>
            <li><span>2018</span> Started to learn programming</li>
            <li><span>2019</span> Worked at IBM Netherlands until 2020</li>
            <li><span>2022</span> Started working as freelance developer</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
