import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./nav/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/stylesheets/index.scss';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <Nav />
          </Col>
        </Row>
        <Switch>
          <Route path='/about'>
            <p>About coming soon...</p>
          </Route>
          <Route path='/blog'>
            <p>Blog coming soon...</p>
          </Route>
          <Route path='/'>
            <App />
          </Route>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
