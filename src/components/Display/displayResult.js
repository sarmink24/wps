import React from "react";

const DisplayResult = ({ message }) => {
  return (
    <div className="section-container">
      <div className="card">
        <div className="card-body">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;
