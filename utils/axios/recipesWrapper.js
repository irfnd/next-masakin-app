import api from "@/utils/axios/api";

const recipesWrapper = {
	fetcher: async (url, params = null) => {
		if (params) return await api.get(url, { params }).then((res) => res.data.results);
		return await api.get(url).then((res) => res.data.results);
	},
};

export default recipesWrapper;
