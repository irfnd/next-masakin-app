// Components
import Layout from "@/components/Layout";
import RecipePhoto from "@/components/recipes/details/RecipePhoto";
import DetailMenu from "@/components/recipes/details/DetailMenu";

export default function RecipesDetail() {
	return (
		<Layout title="Recipe Title - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="position-relative d-flex flex-column align-items-center bg-white mw-mobile">
					<RecipePhoto />
					<DetailMenu />
				</div>
			</div>
		</Layout>
	);
}
