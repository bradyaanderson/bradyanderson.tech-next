import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import MainLayout from "../components/MainLayout";

function _App({Component, pageProps}: AppProps) {
  return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
  );
}

export default _App
