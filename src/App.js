import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Section from "./components/Sections/section";
import CreateForm from "./components/Forms/createForm";
import SearchForm from "./components/Forms/searchForm";

function App() {
  const [sectionsData, setSectionsData] = useState([]);
  const [message, setMessage] = useState([]);

  const [sectionId, featureId, action] = message;

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
    setMessage([sectionId, featureId, 'Search']);
  };

  const handleAddClick = (sectionId, featureId) => {
    setMessage([sectionId, featureId, 'Create']);
  };

  return (
    <div className="app">
      <Navbar />

      <Section
        sectionsData={sectionsData}
        onSearchClick={handleSearchClick}
        onAddClick={handleAddClick}
      />

      {action === "Create" && (
            <CreateForm message={message} />
          )}

{action === "Search" && (
            <SearchForm message={message} />
          )}
    </div>
  );
}

export default App;
