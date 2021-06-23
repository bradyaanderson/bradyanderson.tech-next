import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assests/stylesheets/App.scss';

function App() {
  return (
      <Row className="justify-content-center text-center">
        <Col>
          <Image
            className="logo rounded mx-auto d-block"
            src="/Logos/logo1024-3D-Blue.png"
          />
          <h1>Welcome to the new bradyanderson.tech.</h1>
          <p>More coming soon...</p>
        </Col>
      </Row>
  );
}

export default App;
