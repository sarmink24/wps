// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar/navbar";
// import Section from "./components/Sections/section";
// import DisplayResult from "./components/Display/displayResult";

// function App() {
//   const [message, setMessage] = useState("");

//   const handleSearchClick = (sectionId, featureId) => {
//     setMessage(
//       `Search feature in Feature ${featureId} of Section ${sectionId}`
//     );
//   };

//   const handleAddClick = (sectionId, featureId) => {
//     setMessage(`Add feature in Feature ${featureId} of Section ${sectionId}`);
//   };

//   return (
//     <div className="app">
//       <div className="navbar-container">
//         <Navbar />
//       </div>
//       <div className="app-container">
//         <div className="card-container">
//           <Section
//             sectionId={"A"}
//             featureId={"1"}
//             onSearchClick={handleSearchClick}
//             onAddClick={handleAddClick}
//           />
//           <Section
//             sectionId={"B"}
//             featureId={"2"}
//             onSearchClick={handleSearchClick}
//             onAddClick={handleAddClick}
//           />
//           <Section
//             sectionId={"C"}
//             featureId={"3"}
//             onSearchClick={handleSearchClick}
//             onAddClick={handleAddClick}
//           />
//         </div>
//         <div className="feature-container">
//           <DisplayResult message={message} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Section from "./components/Sections/section";
import DisplayResult from "./components/Display/displayResult";

const sectionsData = [
  { sectionId: "A", featureId: "1" },
  { sectionId: "B", featureId: "2" },
  { sectionId: "C", featureId: "3" },
];

function App() {
  const [message, setMessage] = useState("");

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
      {/* {sectionsData.map((section) => ( */}
      <Section
        // key={section.sectionId}
        // sectionId={section.sectionId}
        // featureId={section.featureId}
        sectionsData={sectionsData}
        onSearchClick={handleSearchClick}
        onAddClick={handleAddClick}
      />
      {/* ))} */}
      <DisplayResult message={message} />
    </div>
  );
}

export default App;
