// Components
import NewRecipesList from "@/components/lists/NewRecipesList";

export default function NewRecipes() {
	return (
		<div className="m-0 mb-4">
			<p className="ts-20 fw-bold p-0 mb-3">New Recipes</p>
			<NewRecipesList />
		</div>
	);
}
