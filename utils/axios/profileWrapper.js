import api from "@/utils/axios/api";

const profileWrapper = {
	get: (url, token) => api.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data.results),
	postPhoto: (url, data, token) => api.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
	deletePhoto: (url, token) => api.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
};

export default profileWrapper;
