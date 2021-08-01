import React from "react";
import { Link } from "react-router-dom";
import "../assests/stylesheets/nav/Nav.scss";

/** Main navbar **/
function Nav() {
  return (
    <>
      <span className="nav-links">
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
        <Link to="/about">About</Link>
      </span>
    </>
  );
}

export default Nav;
