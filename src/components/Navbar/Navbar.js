import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = ({ sectionsData }) => {
  console.log("data: ", sectionsData);
  return (
    <div className="navbar">
      <ul>
        {sectionsData?.map((section) => (
          <li key={section.sectionId}>Section {section.sectionId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
