import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getCookie, setCookie } from "cookies-next";

const api = axios.create({ baseURL: "http://localhost:3000/api" });

const refreshLogic = (failed) => {
	const refreshToken = getCookie("refreshToken");
	axios.post("/auth/refresh", { refreshToken }).then((res) => {
		setCookie("accessToken", res.data.results.accessToken);
		setCookie("refreshToken", res.data.results.refreshToken);
		failed.response.config.headers["Authorization"] = "Bearer " + res.data.results.accessToken;
		return Promise.resolve();
	});
};

createAuthRefreshInterceptor(api, refreshLogic);

export default api;
