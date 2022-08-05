import api from "@/utils/axios/api";

const recipesWrapper = {
	newRecipes: (url) => api.get(url).then((res) => res.data.rows),
};

export default recipesWrapper;
