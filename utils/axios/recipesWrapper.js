import api from "@/utils/axios/api";

const recipesWrapper = {
	fetcher: (url) => api.get(url).then((res) => res.data),
};

export default recipesWrapper;
