import { useSelector } from "react-redux";

export default function ProfilePhoto() {
	const { user } = useSelector((state) => state.auth);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center bg-primary gap-3 h-50 w-100 p-4 pb-5">
			<div>
				<div
					className="bg-white rounded-circle"
					style={{
						width: 100,
						height: 100,
						backgroundImage: `url(${user?.photo || "/images/profile-placeholder.png"})`,
						backgroundPosition: "center top",
						backgroundSize: "cover",
					}}
				></div>
			</div>
			<span className="text-white ts-18 fw-semibold">{user?.name || "Guest"}</span>
		</div>
	);
}
