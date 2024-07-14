import React from "react";
import "./workArea.css";
import CreateForm from "../Forms/createForm";

const WorkArea = ({ message }) => {

  const [sectionId, featureId, action] = message;

  return (
    <div className="display-container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
        {action === "Create" && (
            <CreateForm message={message} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkArea;


