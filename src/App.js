import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionCards from "./components/SectionCards/SectionCards";
import SectionWorkArea from "./components/SectionWorkArea/SectionWorkArea";

function App() {
  const [sectionsData, setSectionsData] = useState([]);
  const [workAreaProps, setWorkAreaProps] = useState({});

  const fetchSectionsData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/sections");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSectionsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSectionsData();
  }, []);

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
