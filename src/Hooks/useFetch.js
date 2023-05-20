import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const value = await res.json();
        setData(value);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    setIsLoading(false);
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
export default useFetch;
