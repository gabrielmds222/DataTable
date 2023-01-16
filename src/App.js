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
      <Header />
      <Row>
        <Col md={2}>
          <BarraLateral />
        </Col>
        <Col>
          <Datatable />
          <Row>
            <Col>
              <h1>Footer</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
