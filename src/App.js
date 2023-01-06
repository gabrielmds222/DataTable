import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
// import Datatable from "./components/Datatable";
// import Example from "./components/Example";
import Header from "./components/Header";

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
        <h1>Content</h1>
      </Col>
    </Container>
    // <Example />
  );
}

export default App;
