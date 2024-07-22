import { useState, useEffect } from 'react';

const useSectionsData = () => {
  const [sectionsData, setSectionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/sections");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSectionsData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionsData();
  }, []);

  return { sectionsData, loading, error };
};

export default useSectionsData;
