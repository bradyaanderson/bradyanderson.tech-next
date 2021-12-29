import React from "react";
import "../assests/stylesheets/footer/Footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div id="footer-content">
        <div id={"footer-email"}>
          <a href="mailto:contact@bradyanderson.tech">
            contact@bradyanderson.tech
          </a>
        </div>
        <div id={"footer-copyright"}>&copy; {year} bradyanderson.tech</div>
      </div>
    </div>
  );
}

export default Footer;
