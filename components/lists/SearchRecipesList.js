import { useEffect } from "react";
import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function SearchRecipesList({ name }) {
	const { data } = useSWR("/recipes", (url) => recipesWrapper.getByName(url, name), { refreshInterval: 1000 });

	return <>{data?.length > 0 && data?.map((recipe) => <RecipesList recipe={recipe} type="search" key={recipe.id} withBtn />)}</>;
}
