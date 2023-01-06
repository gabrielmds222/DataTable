import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./components/Header";
import Datatable from "./components/Datatable";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={12} border="primary">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <h1>Sidebar</h1>
        </Col>
      </Row>
      <Col sm={8}>
        <Datatable />
      </Col>
    </Container>
  );
}

export default App;
