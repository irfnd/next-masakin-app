import axios from "axios";

const api = axios.create({ baseURL: "/api", headers: { Accept: "*/*" } });

export default api;
