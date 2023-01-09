import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./components/Header";
import Datatable from "./components/Datatable";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="body">
      <Row>
        <Col sm={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>

        <Col sm={10}>
          <Datatable />
        </Col>
        <Col sm={10}>
          <h1>Teste</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;
