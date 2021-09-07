import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../assests/stylesheets/about/About.scss";
import aboutText from "./aboutText";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";

/** about Page */
function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container className="about-container">
        <Row className="justify-content-center text-center">
          <Col>
            <h1>About</h1>
            <Image
              className="about-profile rounded mx-auto d-block"
              src="/about/Profile.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-text">
              <pre>{aboutText}</pre>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col>
            <a href="https://www.linkedin.com/in/bradyaanderson/">
              <FontAwesomeIcon className="about-icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/bradyaanderson">
              <FontAwesomeIcon className="about-icon" icon={faGithub} />
            </a>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default About;
