import { useRequest } from "./useRequest";

export const useAuthenticatedRequest = (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  return useRequest(endpoint, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
};
