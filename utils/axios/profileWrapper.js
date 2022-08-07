import api from "@/utils/axios/api";

const profileWrapper = {
	get: (url, token) => api.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data.results),
};

export default profileWrapper;
