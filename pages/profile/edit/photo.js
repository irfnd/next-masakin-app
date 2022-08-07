import { getCookie } from "cookies-next";
import useSWR from "swr";
import profileWrapper from "@/utils/axios/profileWrapper";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import EditPhotoProfile from "@/components/EditPhotoProfile";

export default function ProfileEditPhoto() {
	const { data, error } = useSWR("/profile", (url) => profileWrapper.get(url, getCookie("accessToken")));

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<Layout title="Change Profile Photo - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column h-100 w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-4">Change Profile Photo</span>
						<EditPhotoProfile photo={data.photo} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
