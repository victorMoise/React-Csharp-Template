import axios from "axios";

const API_BASE_URL = "https://localhost:7170/api/";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});
