import { getCookie } from "cookies-next";
import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function LikedRecipesList() {
	const { data, error } = useSWR("/recipes/liked", (url) => recipesWrapper.getPrivate(url, getCookie("accessToken")));

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	return <>{data.length > 0 && data.map((recipe) => <RecipesList recipe={recipe} key={recipe.id} />)}</>;
}
