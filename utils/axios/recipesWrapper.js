import api from "@/utils/axios/api";

const setBearer = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const recipesWrapper = {
	get: (url) => api.get(url).then((res) => res.data.results.data),
	getQuery: (url, params) => api.get(url, { params }).then((res) => res.data.results.data),
	getByName: (url, recipe) => api.get(url, { params: { search: recipe } }).then((res) => res.data.results.data.rows),
	getNew: (url) =>
		api.get(url, { params: { size: 5, sort: "createdAt", order: "desc" } }).then((res) => res.data.results.data.rows),
	getPrivate: (url, token) => api.get(url, setBearer(token)).then((res) => res.data.results.data),
	post: (url, data, token) => api.post(url, data, setBearer(token)).then((res) => res.data),
	check: (url, token) => api.get(url, setBearer(token)).then((res) => res.data.results.data),
	likedOrSaved: (url, token) => api.post(url, null, setBearer(token)).then((res) => res.data),
	unlikedOrUnsaved: (url, token) => api.delete(url, setBearer(token)).then((res) => res.data),
};

export default recipesWrapper;
