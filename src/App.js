import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Section from "./components/Sections/section";

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="app-container">
        <div className="card-container">
          <Section />
        </div>
        <div className="feature-container"></div>
      </div>
    </div>
  );
}

export default App;
