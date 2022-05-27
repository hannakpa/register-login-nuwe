import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Login from "../login/Login";
import Join from "./join/Join";
import Header from "./header/Header";

function Welcome() {
  return (
    <>
      <Container>
        <Row className="m-5">
          <Row className="mb-4">
            <Header />
          </Row>
          <Row>
            <Join />
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Welcome;
