import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./sidebar/Sidebar";

/** Blog landing page */
function Landing() {
  return (
    <Row>
      <Col className="col-3 d-flex">
        <Sidebar />
      </Col>
      <Col className="col-9 d-flex justify-content-center">
        This is where the blog content goes...
      </Col>
    </Row>
  );
}

export default Landing;
