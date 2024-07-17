import React from "react";
import "./section.css";
import { IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";

const Section = ({ sectionsData, onSearchClick, onAddClick }) => {
  return (
    <div className="section-container">
      {sectionsData.map((section) => (
        <div className="card">
          <div className="card-header">
            <h3>Section {section.sectionId}</h3>
          </div>
          <div className="card-body">
            <div className="feature-div">
              <p>Feature {section.featureId}</p>
              <IoMdSearch
              className="icon"
                onClick={() =>
                  onSearchClick(section.sectionId, section.featureId)
                }
              />
              <IoMdAddCircleOutline
              className="icon"
                onClick={() => onAddClick(section.sectionId, section.featureId)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
