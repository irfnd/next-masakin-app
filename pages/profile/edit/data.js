import { getCookie } from "cookies-next";
import { SWRConfig } from "swr";
import profileWrapper from "@/utils/axios/profileWrapper";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import EditProfileForm from "@/components/EditProfileForm";

export default function ProfileEditData({ fallback }) {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column h-100 w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-5">Edit Profile</span>
						<SWRConfig value={{ fallback }}>
							<EditProfileForm />
						</SWRConfig>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async ({ req }) => {
	const profile = await profileWrapper.get("/profile", getCookie("accessToken", { req }));

	return {
		props: {
			fallback: {
				"/profile": profile,
			},
		},
	};
};
