import { getCookie, hasCookie } from "cookies-next";
import { SWRConfig } from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import LikedRecipesList from "@/components/lists/LikedRecipesList";

export default function Liked({ fallback }) {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-5">Liked Recipes</span>
						<SWRConfig value={{ fallback }}>
							<LikedRecipesList />
						</SWRConfig>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async ({ req }) => {
	if (hasCookie("accessToken", { req })) {
		const likedRecipes = await recipesWrapper.getPrivate("/recipes/liked", getCookie("accessToken", { req }));

		return {
			props: {
				fallback: {
					"/recipes/liked": likedRecipes,
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
