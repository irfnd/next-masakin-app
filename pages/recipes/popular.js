import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import PopularRecipesList from "@/components/lists/PopularRecipesList";

export default function Popular({ fallback }) {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-5">Popular Recipes</span>
						<SWRConfig value={{ fallback }}>
							<PopularRecipesList />
						</SWRConfig>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async () => {
	const PopularRecipes = await recipesWrapper.get("/recipes/popular");

	return {
		props: {
			fallback: {
				"/recipes/popular": PopularRecipes,
			},
		},
	};
};
