import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import About from "./about/About";
import Blog from "./blog/Blog";
import React from "react";
import Home from "./home/Home";

/** Router for top-level routes. */
function IndexRouter() {
  return (
    <Router>
      <div className="main-container">
        <div className="nav-container">
          <Nav />
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* End Router Switch */}
      </div>
    </Router>
  );
}

export default IndexRouter;
