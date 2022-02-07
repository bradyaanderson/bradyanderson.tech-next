import styles from './footer.module.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
      <footer>
        <div id="footer" className={styles.footer}>
          <div id="footer-content">
            <div id={"footer-email"}>
              <a href="mailto:contact@bradyanderson.tech">
                contact@bradyanderson.tech
              </a>
            </div>
            <div id={"footer-copyright"}>&copy; {year} bradyanderson.tech</div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
