// Components
import Layout from "@/components/Layout";
import InputSearch from "@/components/form/InputSearch";
import NewRecipes from "@/components/home/NewRecipes";
import PopularRecipes from "@/components/home/PopularRecipes";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<Layout title="Homepage - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile pb-5">
					<div className="p-4 h-100 w-100">
						<InputSearch mb={4} />
						<NewRecipes mb={4} />
						<PopularRecipes mb={5} />
					</div>
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}
