import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./components/Header";
import Datatable from "./components/Datatable";
import Sidebar from "./components/Sidebar";

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
          <Sidebar />
        </Col>

        <Col sm={8}>
          <Datatable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
