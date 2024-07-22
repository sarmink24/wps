import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/fetch-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        const userArray = result || []; // Extract users array or empty array if not present

        if (userArray.length > 0) {
          const keys = Object.keys(userArray[0]);
          const cols = keys.map(key => ({
            Header: key.charAt(0).toUpperCase() + key.slice(1),
            accessor: key,
          }));

          setColumns(cols);
          setUserData(userArray);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, columns, loading, error };
};

export default useUserData;
