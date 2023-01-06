import React from "react";
import "./App.css";
// import Datatable from "./components/Datatable";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Header</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h1>Sidebar</h1>
        </div>
      </div>
      <div className="col-sm-8">
        <h1>Datatable</h1>
      </div>
    </div>
  );
}

export default App;
