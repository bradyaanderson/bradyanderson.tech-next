import React from "react";
import "../assests/stylesheets/footer/Footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <span>&copy; {year} bradyanderson.tech</span>
    </div>
  );
}

export default Footer;
