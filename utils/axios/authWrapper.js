import axios from "axios";

const authWrapper = {
	register: (data) => axios.post("/api/auth/register", data),
	login: (data) => axios.post("/api/auth/login", data),
	logout: () => axios.get("/api/auth/logout"),
};

export default authWrapper;
