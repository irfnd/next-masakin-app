import { hasCookie } from "cookies-next";

// Components
import Layout from "@/components/Layout";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import Menu from "@/components/profile/Menu";
import Navbar from "@/components/Navbar";

export default function Profile() {
	if (!hasCookie("accessToken")) {
		localStorage.clear();
	}

	return (
		<Layout title="Profile - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-white mw-mobile pb-5">
					<ProfilePhoto />
					<Menu />
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}
