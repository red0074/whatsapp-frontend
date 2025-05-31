import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-backend-8568.onrender.com",
});

export default instance;
