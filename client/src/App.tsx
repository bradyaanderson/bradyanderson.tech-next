import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assests/stylesheets/App.css';

function App() {
  return (
    <>
      <Container
        fluid
        className="App"
        style={{
          background: '#263238',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row className="justify-content-center text-center">
          <Col>
            <Image
              className="rounded mx-auto d-block"
              src="/Logos/logo1024-3D-invert.png"
              style={{
                width: '170px',
                padding: '15px 0'
              }}/>
            <h1>Welcome to the new bradyanderson.tech</h1>
            <p>More coming soon...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
