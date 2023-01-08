import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./components/Header";
// import Datatable from "./components/Datatable";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
    </>
    // <Container>
    //   <Row lg={12}>
    //     <Col sm={12} border="primary">
    //       <Header />
    //     </Col>
    //   </Row>

    //   <Row lg={12}>
    //     <Col sm={4}>
    //       {/* <Sidebar /> */}
    //       <h1>Qualquer coisa</h1>
    //     </Col>

    //     <Col sm={8}>
    //       {/* <Datatable /> */}
    //       <h1>Qualquer coisa</h1>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
