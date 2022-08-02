export default function FormLayout({ bg, children }) {
	return (
		<div className="d-flex justify-content-center">
			<div className={`${bg} mw-mobile min-vh d-flex flex-column justify-content-center py-4`}>
				<div className="row d-flex flex-column px-4 m-0">{children}</div>
			</div>
		</div>
	);
}
