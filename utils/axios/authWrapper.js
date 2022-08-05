import api from "@/utils/axios/api";

const authWrapper = {
	register: (data) => api.post("/auth/register", data),
	login: (data) => api.post("/auth/login", data),
	logout: () => api.get("/auth/logout"),
};

export default authWrapper;
