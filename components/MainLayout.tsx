import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import styles from "./main-layout.module.scss";

/** Main layout for website. Includes nav and footer. */
const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <div className={styles.appContainer}>
        <Nav />
        <div className={styles.mainContainer}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
