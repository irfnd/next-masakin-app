import api from "@/utils/axios/api";

const recipesWrapper = {
	get: (url) => api.get(url).then((res) => res.data.results),
	getNew: (url) => api.get(url, { params: { size: 5, sort: "createdAt", order: "desc" } }).then((res) => res.data.results.rows),
	getPrivate: (url, token) => api.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data.results),
	post: (url, data, token) => api.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
	check: (url, token) => api.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data.results),
	likedOrSaved: (url, token) => api.post(url, null, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
	unlikedOrUnsaved: (url, token) => api.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
};

export default recipesWrapper;
