import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionCards from "./components/SectionCards/SectionCards";
import SectionWorkArea from "./components/SectionWorkArea/SectionWorkArea";
import useSectionsData from "./Hooks/useSectionsData";

function App() {
  const { sectionsData } = useSectionsData();
  const [workAreaProps, setWorkAreaProps] = useState({});

  const handleSectionClick = (sectionId, featureId, action) => {
    setWorkAreaProps({
      sectionId,
      featureId,
      action
    });
  };

  return (
    <div className="app">
      <Navbar />
      <div className="section-container">
        <SectionCards
          sectionsData={sectionsData}
          onSectionClick={handleSectionClick}
        />
        <SectionWorkArea workAreaProps={workAreaProps} />
      </div>

    </div>
  );
}

export default App;
