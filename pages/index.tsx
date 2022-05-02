import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Image from "../components/general/S3Image";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - bradyanderson.tech</title>
      </Head>
      <main>
        <div className={styles.homeContainer}>
          <div className={styles.logoContainer}>
            <Image path={`/index/profileIndex.jpg`} maxWidth="32rem" />
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
