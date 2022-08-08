import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function PopularRecipesList({ isHome = false }) {
	const { data } = useSWR("/recipes/popular", recipesWrapper.get);

	if (isHome) return <>{data.length > 0 && data.slice(0, 5).map((recipe) => <RecipesList recipe={recipe} type="popular" key={recipe.id} />)}</>;

	return <>{data.length > 0 && data.map((recipe) => <RecipesList recipe={recipe} type="popular" key={recipe.id} withBtn />)}</>;
}
