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
      <main className={styles.main}>
        <div className={styles.container}>
          <Navbar />
          <section id="works">
            <About />
          </section>
        </div>
      </main>
    </>
  );
}
