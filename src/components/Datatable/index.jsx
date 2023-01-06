import React from "react";

const Datatable = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-6">2 of 3 (wider)</div>
        <div className="col">3 of 3</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-5">2 of 3 (wider)</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  );
};

export default Datatable;
