// Components
import Layout from "@/components/Layout";
import AddRecipeForm from "@/components/AddRecipeForm";
import Navbar from "@/components/Navbar";

export default function Add() {
	return (
		<Layout title="Add Recipe - Masakin App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-light mw-mobile p-4 pb-5">
					<div className="d-flex flex-column w-100 pb-5 mb-4">
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 my-5">Add Your Recipe</span>
						<AddRecipeForm />
					</div>
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}
