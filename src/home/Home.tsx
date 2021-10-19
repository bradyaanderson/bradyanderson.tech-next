import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import "../assests/stylesheets/App.scss";
import React from "react";

/** The home page. */
function Home() {
  return (
    <>
      <Helmet>
        <title>bradyanderson.tech</title>
      </Helmet>
      <Container className="home-container">
        <Row className="home-content text-center">
          <Col>
            <Image
              className="logo rounded mx-auto d-block"
              src="/logos/logo1024.png"
            />
            <h1 className="title">Welcome to the new bradyanderson.tech</h1>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
