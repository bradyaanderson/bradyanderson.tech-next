import styles from "./footer.module.scss";
import ExternalLink from "../general/ExternalLink";

function Footer() {
  const year = new Date().getFullYear();
  return (
      <footer>
        <div id="footer" className={styles.footer}>
          <div id="footer-content">
            <div id="footer-email">

            </div>
            <div id="footer-social">
              <a href="mailto:contact@bradyanderson.tech" target="_top">
                Email
              </a> |{" "}
              <ExternalLink link="https://www.linkedin.com/in/bradyaanderson/">
                Linkedin
              </ExternalLink> |{" "}
              <ExternalLink link="https://github.com/bradyaanderson">
                Github
              </ExternalLink>
            </div>
            <div id={"footer-copyright"}>&copy; {year} bradyanderson.tech</div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
