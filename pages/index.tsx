import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState<number>(1);

  const renderSection = () => {
    switch (section) {
      case 1:
        return <Projects />;
      case 2:
        return <About />;
      case 3:
        return <div>Contact</div>;
    }
  };

  return (
    <>
      <Head>
        <title>Secret</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Navbar section={section} setSection={setSection} />
          <section>{renderSection()}</section>
        </div>
      </main>
    </>
  );
}
