import Image from "next/image";

// Icons + Images
import profile from "@/public/images/profile-placeholder.png";

export default function FormImg({ mb }) {
	return (
		<div className={`col-auto d-flex justify-content-center p-0 mb-${mb}`}>
			<Image src={profile} alt="Profile Photo" />
		</div>
	);
}
