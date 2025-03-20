import axios from "axios";

//const API_BASE_URL = process.env.REACT_APP_API_URL_NODE || "http://140.245.15.240:3000"; // Change for production
const API_BASE_URL = process.env.REACT_APP_API_URL_NODE || "http://127.0.0.1:8080"; // Change for production

export const Nodeapi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Allows sending cookies for authentication
  headers: {
    "Content-Type": "application/json",
  },
});
