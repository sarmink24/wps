import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        {/* TODO: This hard-coding should be changed and come from section data api call */}
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
      </ul>
    </div>
  );
};

export default Navbar;
