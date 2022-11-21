import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Figure from "../components/general/Figure";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - bradyanderson.tech</title>
      </Head>
      <main>
        <div className={styles.homeContainer}>
          <div className={styles.logoContainer}>
            <Figure
              path={`/index/profileIndex.jpg`}
              height={300}
              width={300}
              priority
            />
          </div>
          <div className={styles.titleContainer}>
            <h1>Welcome to bradyanderson.tech.</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
