import styles from "./footer.module.scss";
import ExternalLink from "../general/ExternalLink";

/** Footer displayed at the bottom of all pages. */
function Footer() {
  return (
    <footer>
      <div id="footer" className={styles.footer}>
        <div id="footer-content">
          <div id="footer-email"></div>
          <div id="footer-social">
            <a href="mailto:contact@bradyanderson.tech" target="_top">
              Email
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <ExternalLink link="https://www.linkedin.com/in/bradyaanderson/">
              Linkedin
            </ExternalLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <ExternalLink link="https://github.com/bradyaanderson">
              Github
            </ExternalLink>
          </div>
          <div id={"footer-copyright"}>&copy; 2022 bradyanderson.tech</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
