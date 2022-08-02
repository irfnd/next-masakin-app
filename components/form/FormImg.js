import Image from "next/image";

import profile from "@/public/images/profile-placeholder.png";

export default function FormImg({ mb }) {
	return (
		<div className={`col d-flex justify-content-center p-0 mb-${mb}`}>
			<Image src={profile} alt="Profile Photo" />
		</div>
	);
}
