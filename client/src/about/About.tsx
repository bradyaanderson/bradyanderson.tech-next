import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assests/stylesheets/about/About.scss";
import aboutText from "./aboutText";
import { Container } from "react-bootstrap";

/** About Page */
function About() {
  return (
    <Container className="about-container">
      <Row className="justify-content-center text-center">
        <Col>
          <h1>About</h1>
          <Image
            className="about-profile rounded mx-auto d-block"
            src="/About/Profile.jpg"
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
    </Container>
  );
}

export default About;
