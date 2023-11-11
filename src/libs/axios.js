import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://alert-lime-underwear.cyclic.app",
  baseURL: "http://localhost:8000",
});
