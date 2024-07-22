// useSearchData.js

import { useState, useEffect } from 'react';

const useSearchData = (userData, searchCriteria) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!searchCriteria) {
      setFilteredData(userData);
      return;
    }


    const filteredResults = userData.filter(user => {
        const nameMatch = !searchCriteria.name || 
                          user.firstname.toLowerCase().includes(searchCriteria.name.toLowerCase()) || 
                          user.lastname.toLowerCase().includes(searchCriteria.name.toLowerCase());
  
        const startDateMatch = !searchCriteria.startDate || 
                               new Date(user.startDate) >= new Date(searchCriteria.startDate);
  
        const endDateMatch = !searchCriteria.endDate || 
                             new Date(user.endDate) <= new Date(searchCriteria.endDate);
  
        return nameMatch || startDateMatch || endDateMatch;
      });

    setFilteredData(filteredResults);
  }, [userData, searchCriteria]);

  return filteredData;
};

export default useSearchData;
