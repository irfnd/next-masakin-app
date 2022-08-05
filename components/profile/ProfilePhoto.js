import { useSelector } from "react-redux";

export default function ProfilePhoto() {
	const { user } = useSelector((state) => state.auth);

	// Attributes
	const name = user?.name || "Guest";
	const photoUrl = `url(${user?.photo || "/images/profile-placeholder.png"})`;
	const photoStyle = {
		width: 100,
		height: 100,
		backgroundImage: photoUrl,
		backgroundPosition: "center top",
		backgroundSize: "cover",
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center bg-primary gap-3 h-50 w-100 p-4 pb-5">
			<div>
				<div className="bg-white rounded-circle" style={photoStyle}></div>
			</div>
			<span className="text-white ts-18 fw-semibold">{name}</span>
		</div>
	);
}
