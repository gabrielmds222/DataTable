import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Editar from "../pages/Editar";

function Rota() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/editar" exact element={<Editar />} />
      </Routes>
    </>
  );
}

export default Rota;
