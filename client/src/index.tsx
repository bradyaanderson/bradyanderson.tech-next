import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/stylesheets/index.scss";
import App from "./App";
import BlogLanding from "./blog/Blog";

/** Application root */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Main Container */}
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col>
            <Nav />
          </Col>
        </Row>
        {/* Router Switch */}
        <Switch>
          <Route path="/about">
            <p>About coming soon...</p>
          </Route>
          <Route path="/blog">
            <BlogLanding />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
        {/* End Router Switch */}
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
