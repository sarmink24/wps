import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Section from "./components/Sections/section";
import DisplayResult from "./components/Display/displayResult";

function App() {
  const [sectionsData, setSectionsData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchSectionsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/sections");
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

  const handleSearchClick = (sectionId, featureId) => {
    setMessage(
      `Search feature in Feature ${featureId} of Section ${sectionId}`
    );
  };

  const handleAddClick = (sectionId, featureId) => {
    setMessage(`Add feature in Feature ${featureId} of Section ${sectionId}`);
  };

  return (
    <div className="app">
      <Navbar />

      <Section
        sectionsData={sectionsData}
        onSearchClick={handleSearchClick}
        onAddClick={handleAddClick}
      />

      <DisplayResult message={message} />
    </div>
  );
}

export default App;
