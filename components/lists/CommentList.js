export default function CommentList({ comments }) {
	return (
		<div className="row d-flex bg-light rounded-4 shadow-sm gap-3 w-100 m-0 mt-3 p-3">
			<div className="col-auto p-0">
				<div
					className="d-flex justify-content-center align-items-center rounded-circle"
					style={{
						height: "70px",
						width: "70px",
						backgroundImage: `url(/images/profile-placeholder.png)`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				></div>
			</div>
			<div className="col d-flex flex-column p-0">
				<span className="ts-16 fw-semibold">Ayudia</span>
				<span>Nice recipe. simple and delicious, thankyou</span>
			</div>
		</div>
	);
}
