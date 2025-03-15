import { useState } from "react";
import { instance } from "../utils/functions/axios";

export const useRequest = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const sendRequest = async (body) => {
    setLoading(true);
    try {
      const response = await instance.request({
        url: endpoint,
        method: options.method || "GET",
        headers: requestHeaders,
        params: options.params,
        data: body,
      });

      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, sendRequest };
};

