import React from "react";
import Datatable from "../../components/Datatable";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="page-header">
        <p style={{ fontSize: "24px" }}>Lista geral de relatórios</p>
        <p style={{ marginLeft: "10px" }}>
          Página de gerenciamento de relatórios
        </p>
      </div>
      <div className="table-container">
        <Datatable />
      </div>
    </>
  );
};

export default Home;
