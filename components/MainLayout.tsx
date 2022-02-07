import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import styles from './main-layout.module.scss'

interface Props {
  children: React.ReactNode;
}

function MainLayout({children}: Props) {
  return (
      <>
        <div className={styles.mainContainer}>
          <Nav/>
          <main>{children}</main>
          <Footer/>
        </div>
      </>
  )
}

export default MainLayout;
