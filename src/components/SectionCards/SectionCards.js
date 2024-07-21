import React from "react";
import "./SectionCards.css";
import { IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";

const SectionCards = ({ sectionsData = [], onSectionClick = () => {} }) => {
  return (
    <div className="section-cards-container">
      {sectionsData.map((section) => (
        <div className="card" key={Math.random()}>
          <div className="card-header">
            <h3>Section {section.sectionId}</h3>
          </div>
          <div className="card-body">
            <div className="feature-div">
              <p>Feature {section.featureId}</p>
              <IoMdSearch
                className="icon"
                onClick={() =>
                  onSectionClick(section.sectionId, section.featureId, "search")
                }
              />
              <IoMdAddCircleOutline
                className="icon"
                onClick={() => onSectionClick(section.sectionId, section.featureId, "create")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionCards;
