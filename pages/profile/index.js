// Components
import Layout from "@/components/Layout";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import ProfileMenu from "@/components/profile/ProfileMenu";
import Navbar from "@/components/Navbar";

export default function Profile() {
	return (
		<Layout title="Profile - Masakin App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center min-vh-100 bg-white mw-mobile pb-5">
					<ProfilePhoto />
					<ProfileMenu />
				</div>
				<Navbar />
			</div>
		</Layout>
	);
}
