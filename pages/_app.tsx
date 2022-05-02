import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import Head from "next/head";

function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>brayanderson.tech</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,900;1,100;1,400;1,900&display=swap');
        </style>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default _App;
