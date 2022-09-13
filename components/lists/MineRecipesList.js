import { getCookie } from "cookies-next";
import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function MineRecipesList() {
	const { data } = useSWR("/recipes/mine", (url) => recipesWrapper.getPrivate(url, getCookie("accessToken")));

	return (
		<>{data.length > 0 && data.map((recipe) => <RecipesList recipe={recipe} type="mine" key={recipe.id} withBtn />)}</>
	);
}
