import { useState, useEffect } from "react";

const useAPI = (url, method = "GET", params = null) => {
  const [data, setData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) return; // Early exit if no URL is provided

    setLoading(true);
    try {
      const options = { method };
      if (params && method !== "GET") {
        options.body = JSON.stringify(params);
        options.headers = { 'Content-Type': 'application/json' };
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
      setColumns(result.columns);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, params]);

  return { data, columns, loading, error };
};

export default useAPI;
