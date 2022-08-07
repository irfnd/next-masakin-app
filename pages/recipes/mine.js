import { getCookie, hasCookie } from "cookies-next";
import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import MineRecipesList from "@/components/lists/MineRecipesList";

export default function Mine({ fallback }) {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile p-4 pb-5">
					<div className="d-flex flex-column w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-4">My Recipes</span>
						<SWRConfig value={{ fallback }}>
							<MineRecipesList />
						</SWRConfig>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async ({ req }) => {
	if (hasCookie("accessToken", { req })) {
		const mineRecipes = await recipesWrapper.getPrivate("/recipes/mine", getCookie("accessToken", { req }));

		return {
			props: {
				fallback: {
					"/recipes/mine": mineRecipes,
				},
			},
		};
	}

	return {
		redirect: {
			destination: "/",
			permanent: false,
		},
	};
};
