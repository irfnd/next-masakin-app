import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import RecipePhoto from "@/components/details/RecipePhoto";
import DetailMenu from "@/components/details/DetailMenu";

export default function RecipesDetail({ id, fallback }) {
	return (
		<Layout title={`${fallback[`/recipes/${id}`].name} - Resip! App`}>
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
	const allRecipes = await recipesWrapper.get("/recipes/all");
	const paths = allRecipes.map((recipe) => ({ params: { id: recipe.id.toString() } }));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const recipe = await recipesWrapper.get(`/recipes/${params.id}`);
	return {
		props: {
			id: params.id,
			fallback: { [`/recipes/${params.id}`]: recipe },
		},
	};
};
