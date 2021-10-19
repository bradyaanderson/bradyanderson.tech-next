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
import ExternalLink from "../blog/blog-components/ExternalLink";

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
            <ExternalLink link="https://www.linkedin.com/in/bradyaanderson/">
              <div className="about-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </ExternalLink>
            <ExternalLink link="https://github.com/bradyaanderson">
              <div className="about-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </ExternalLink>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default About;
