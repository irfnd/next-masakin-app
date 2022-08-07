import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import InputSearch from "@/components/form/InputSearch";
import NewRecipes from "@/components/home/NewRecipes";
import PopularRecipes from "@/components/home/PopularRecipes";
import Navbar from "@/components/Navbar";

export default function Home({ fallback }) {
	return (
		<Layout title="Homepage - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile pb-5">
					<div className="p-4 h-100 w-100">
						<InputSearch mb={4} />
						<SWRConfig value={{ fallback }}>
							<NewRecipes />
							<PopularRecipes />
						</SWRConfig>
					</div>
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async () => {
	const newRecipes = await recipesWrapper.getNew("/recipes");
	const PopularRecipes = await recipesWrapper.get("/recipes/popular");

	return {
		props: {
			fallback: {
				"/recipes": newRecipes,
				"/recipes/popular": PopularRecipes,
			},
		},
	};
};
