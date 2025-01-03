import axios from "axios";

const BASE_URL = "https://chat.teckneeka.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
