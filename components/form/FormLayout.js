// Components
import FormBackBtn from "./FormBackBtn";

export default function FormLayout({ bg, backBtn, children }) {
	return (
		<div className="d-flex justify-content-center">
			<div className={`d-flex flex-column ${bg} mw-mobile min-vh py-4`}>
				{backBtn && <FormBackBtn />}
				<div className="row d-flex justify-content-center flex-column h-100 px-4 py-0 m-0">{children}</div>
			</div>
		</div>
	);
}
