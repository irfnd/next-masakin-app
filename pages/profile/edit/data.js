// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import EditProfileForm from "@/components/EditProfileForm";

export default function ProfileEditData() {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column h-100 w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-5">Edit Profile</span>
						<EditProfileForm />
					</div>
				</div>
			</div>
		</Layout>
	);
}
