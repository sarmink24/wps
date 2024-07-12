import React from "react";
import "./displayResult.css";
import AddForm from "../Forms/addForm";

const DisplayResult = ({ message }) => {
  return (
    <div className="display-container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          {message.toLowerCase().includes("add") && (
            <AddForm message={message} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;
