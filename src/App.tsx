import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./assests/stylesheets/App.scss";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";

/** Root Content **/
function App() {
  return (
    <>
      <Helmet>
        <title>bradyanderson.tech</title>
      </Helmet>
      <Container className="home-container">
        <Row className="justify-content-center text-center">
          <Col>
            <Image
              className="logo rounded mx-auto d-block"
              src="/logos/logo1024-3D-Blue.png"
            />
            <h1 className="title">Welcome to the new bradyanderson.tech</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
