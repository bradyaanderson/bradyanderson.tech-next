import Link from "next/link";
import styles from './nav.module.scss';

/** Navbar to appear at the top of every page **/
function Nav() {
  return (
      <div className={styles.navContainer}>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link> | <Link href="/blog">Blog</Link> |{" "}
          <Link href="/about">About</Link>
        </div>
      </div>
  );
}

export default Nav;
