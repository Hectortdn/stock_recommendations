import axios from "axios";

const ROOT_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: ROOT_URL,
});

export { api };
