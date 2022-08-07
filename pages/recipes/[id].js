import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import RecipePhoto from "@/components/recipes/details/RecipePhoto";
import DetailMenu from "@/components/recipes/details/DetailMenu";

export default function RecipesDetail({ id, fallback }) {
	return (
		<Layout title="Recipe Title - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="position-relative d-flex flex-column align-items-center bg-white mw-mobile">
					<SWRConfig value={{ fallback }}>
						<RecipePhoto id={id} />
						<DetailMenu id={id} />
					</SWRConfig>
				</div>
			</div>
		</Layout>
	);
}

export const getStaticPaths = async () => {
	const allRecipes = await recipesWrapper.fetcher("/recipes/all");
	const paths = allRecipes.map((recipe) => ({ params: { id: recipe.id.toString() } }));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const recipe = await recipesWrapper.fetcher(`/recipes/${params.id}`);
	return {
		props: {
			id: params.id,
			fallback: { [`/recipes/${params.id}`]: recipe },
		},
	};
};
