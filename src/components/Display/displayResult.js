import React from "react";
import "./displayResult.css";

const DisplayResult = ({ message }) => {
  return (
    <div className="display-container">
      <div className="card">
        <div className="card-body">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;
