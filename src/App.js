import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Section from "./components/Sections/section";
import CreateForm from "./components/Forms/createForm";
import SearchForm from "./components/Forms/searchForm";
import UserData from "./components/Tables/userData";

function App() {
  const [sectionsData, setSectionsData] = useState([]);
  const [message, setMessage] = useState([]);
  const [userData, setUserData] = useState([]);
  const [columns, setColumns] = useState([]);


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

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/fetch-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();

      // Assuming result is an object with a property `users` that is an array
      const userArray = result || []; // Extract users array or empty array if not present

      if (userArray.length > 0) {
        const keys = Object.keys(userArray[0]);
        const cols = keys.map(key => ({
          Header: key.charAt(0).toUpperCase() + key.slice(1),
          accessor: key,
        }));

        setColumns(cols);
        console.log(" columns: ", cols);
        setUserData(userArray);
        console.log(" data: ", userData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSectionsData();
    fetchUserData();
  }, []);

  const handleSearchClick = (sectionId, featureId) => {
    setMessage([sectionId, featureId, "Search"]);
  };

  const handleAddClick = (sectionId, featureId) => {
    setMessage([sectionId, featureId, "Create"]);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      // Update local state to reflect changes
      setUserData(prevData => [
        ...prevData,
        { id: prevData.length + 1, ...formData } // Assign new ID based on previous data length
      ]);
    } catch (error) {
      console.error(error);
    }
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
        <CreateForm message={message} onSubmit={handleFormSubmit} />
      )}

      {action === "Search" && <SearchForm message={message} />}

      <UserData columns={columns} data={userData} />
    </div>
  );
}

export default App;
