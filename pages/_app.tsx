import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import Head from "next/head";

function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default _App;
