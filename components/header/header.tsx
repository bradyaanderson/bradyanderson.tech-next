import Nav from "./nav/Nav";
import Image from "next/image";
import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/logos/logo1024-White.png"
            alt="Logo"
            height={"100%"}
            width={"100%"}
            layout={"responsive"}
            priority={true}
          />
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Header;
