import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Datatable from "./components/Datatable";
import BarraLateral from "./components/BarraLateral";
import { Layout } from "phosphor-react";
// import Footer from "./components/Footer";

import Rota from "./routes";

import Home from "./pages/Home";

function App() {
  return (
    <div className="Container">
      <div className="header">
        <h1> componente Header</h1>
      </div>
      <div className="content">
        <div className="sidebar">
          <h1>Componente sidebar</h1>
        </div>
        <div className="right-content">
          <div className="page">
            <h1>Componente da tela</h1>
          </div>
          <div className="footer">
            <h1>Componente de footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
