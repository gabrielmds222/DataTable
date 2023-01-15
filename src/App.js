import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Datatable from "./components/Datatable";
import BarraLateral from "./components/BarraLateral";
import { Layout } from "phosphor-react";
// import Footer from "./components/Footer";

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
          <BarraLateral />
        </Col>
        <Col sm={10}>
          <Datatable />
        </Col>
      </Row>
    </div>
  );
}

export default App;
