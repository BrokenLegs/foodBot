import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://platform.fatsecret.com/rest"; // Replace with your API base URL
const CLIENT_ID = process.env.FAT_SECRET_PLATFORM_API_CLIENT_ID;
const CLIENT_SECRET = process.env.FAT_SECRET_PLATFORM_API_CLIENT_SECRET;

const useApi = (endpoint: string, params: Record<string, any> = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
          headers: {
            "Client-ID": CLIENT_ID,
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useApi;
