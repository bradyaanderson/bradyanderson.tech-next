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
            height={32}
            width={32}
            priority={true}
          />
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Header;
