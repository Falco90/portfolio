import Head from "next/head";
import styles from "../styles/Home.module.css";
import Works from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Secret</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <div className={styles.container}>
          <Navbar />
        {/* <section id="about">
          <h2>/ About</h2>
          <About />
        </section> */}
        <section id="works">
          {/* <h2>/ Projects</h2> */}
          <Works />
        </section>
        {/* <section>
          <h2>/ Contact</h2>
        </section> */}
        </div>
      </main>

    </>
  );
}
