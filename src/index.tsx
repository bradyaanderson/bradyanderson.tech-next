import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/stylesheets/index.scss";
import App from "./App";
import Blog from "./blog/Blog";
import About from "./about/About";

/** Application root */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Main Container */}
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
            <App />
          </Route>
        </Switch>
        {/* End Router Switch */}
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
