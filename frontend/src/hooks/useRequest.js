import { useState } from "react";
import { instance } from "../utils/functions/axios";

export const useRequest = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
      if (err.response) {
        if (err.response.data && err.response.data.errors) {
          const validationErrors = err.response.data.errors;
          const errorMessages = Object.keys(validationErrors).map((field) => {
            return `${field}: ${validationErrors[field].join(", ")}`;
          });

          throw new Error(`Validation errors: ${errorMessages.join(", ")}`);
        } else {
          throw new Error(`API Error: ${err.response.data}`);
        }
      } else if (err.request) {
        throw new Error("Request Error: No response received");
      } else {
        throw new Error(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, sendRequest };
};
