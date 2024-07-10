import React from "react";
import "./section.css";
import { IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";

const Section = ({ sectionId, featureId, onSearchClick, onAddClick }) => {
  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <h3>Section {sectionId}</h3>
        </div>
        <div className="card-body">
          <div className="feature-div">
            <p>Feature {featureId}</p>
            <IoMdSearch onClick={() => onSearchClick(sectionId, featureId)} />
            <IoMdAddCircleOutline
              onClick={() => onAddClick(sectionId, featureId)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
