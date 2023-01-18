import React from "react";
import Datatable from "../../components/Datatable";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="page-header">
        <p>Lista geral de relatórios</p>
        <p>Página de gerenciamento de relatórios</p>
      </div>
      <div className="table-container">
        <Datatable />
      </div>
    </>
  );
};

export default Home;
