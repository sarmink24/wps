import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionCards from "./components/SectionCards/SectionCards";
import SectionWorkArea from "./components/SectionWorkArea/SectionWorkArea";
import useAPI from "./Hooks/useAPI";

function App() {
  // Generic use API hook (that will be used for ALL api calls)
  const { data, loading, error } = useAPI("http://localhost:5001/api/sections");
  const [workAreaProps, setWorkAreaProps] = useState({});

  const handleSectionClick = (sectionId, featureId, action) => {
    setWorkAreaProps({
      sectionId,
      featureId,
      action,
    });
  };

  return (
    <div className="app">
      <Navbar />
      <div className="section-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <SectionCards sectionsData={data} onSectionClick={handleSectionClick} />
            <SectionWorkArea workAreaProps={workAreaProps} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
