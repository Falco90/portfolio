import { FC, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Project from "../../types/Project";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import Link from "next/link";

type Props = {
  project: Project | undefined,
};

const Display: FC<Props> = (props) => {
  const { project } = props;

  const renderIcons = () => {
    return (
      <div className={styles.iconbar}>
        {project?.stack.map((item) => {
          switch (item) {
            case "react":
              return (
                <p>
                  <SiReact />
                </p>
              );
            case "next":
              return (
                <p>
                  <SiNextdotjs />
                </p>
              );
            case "typescript":
              return (
                <p>
                  <SiTypescript />
                </p>
              );
            case "solidity":
              return (
                <p>
                  <SiSolidity />
                </p>
              );
          }
        })}
      </div>
    );
  };

  return (
    <div className={styles.display}>
      {project ? (
        <div key={project.id}>
          <div className={styles.displayText}>
            <div className={styles.heading}>
              <h1>{project.name}</h1>{" "}
              <p>
                <Link href={project.url} target="_blank">
                  <ImNewTab />
                </Link>
              </p>
            </div>
            <p>{project.description}</p>
          </div>
            {renderIcons()}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Display;
