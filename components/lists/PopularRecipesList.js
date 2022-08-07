import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function PopularRecipesList({ isHome = false }) {
	const { data, error } = useSWR("/recipes/popular", recipesWrapper.get);

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;
	if (isHome) return <>{data.length > 0 && data.slice(0, 5).map((recipe) => <RecipesList recipe={recipe} key={recipe.id} />)}</>;

	return <>{data.length > 0 && data.map((recipe) => <RecipesList recipe={recipe} key={recipe.id} withBtn />)}</>;
}
