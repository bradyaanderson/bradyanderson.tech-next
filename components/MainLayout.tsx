import React from "react";
import Footer from "./footer/Footer";
import styles from "./main-layout.module.scss";
import Header from "./header/header";

/** Main layout for website. Includes nav and footer. */
const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.mainContainer}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
