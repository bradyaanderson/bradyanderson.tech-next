import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss';
import Image from 'next/image';

const HomePage: NextPage = () => {
  return (
      <>
        <Head>
          <title>bradyanderson.tech</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
          <div className={styles.homeContainer}>
            <div className={styles.logoContainer}>
              <Image
                  src="/logos/logo1024-White.png"
                  alt="Logo"
                  height={'100%'}
                  width={'100%'}
                  layout={'responsive'}
              />
            </div>
            <div className={styles.titleContainer}>
              <h1>Welcome to bradyanderson.tech.</h1>
            </div>
          </div>
        </main>
      </>
  )
}

export default HomePage;
