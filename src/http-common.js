import axios from "axios";

export default axios.create({
  baseURL: "https://thanwa-api.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});