import React from "react";
import "./scss/main/app.scss";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./landing/Cover";
import Welcome from "./landing/welcome/Welcome";
import Login from "./landing/login/Login";
import RegisterDev from "./landing/register/RegisterDev";
import RegisterBuss from "./landing/register/RegisterBuss";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          {/* left column / fixed */}
          <Col md="6" className="left-box">
            <Cover />
          </Col>
          {/* right column / dynamic */}
          <Col md="6" className="right-box">
            {/* navigation routes open */}
            <Routes>
              {/* default route */}
              <Route path="/" element={<Welcome />} />
              {/* other routes */}
              <Route path="/registerdev" element={<RegisterDev />} />
              <Route path="/registerbuss" element={<RegisterBuss />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
