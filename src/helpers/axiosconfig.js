import axios from "axios";

const instance = axios.create({
  baseURL: "https://casino-backend-01ek.onrender.com/api/",
  // https://casino-backend-01ek.onrender.com
  // baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

export default instance;