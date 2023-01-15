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
        <Col sm={10}>Rotas</Col>
      </Row>
    </div>
    // <Row>
    //   <Col md={8}>
    //     <div style={{ backgroundColor: "red" }}>md="8"</div>
    //     <Row>
    //       <Col md={6}>
    //         <div style={{ backgroundColor: "blue" }}>md="6"</div>
    //       </Col>
    //       <Col md={6}>
    //         <div style={{ backgroundColor: "green" }}>md="6"</div>
    //       </Col>
    //     </Row>
    //   </Col>
    //   <Col md={4}>
    //     <div style={{ backgroundColor: "purple" }}>md="6"</div>
    //   </Col>
    // </Row>
  );
}

export default App;
