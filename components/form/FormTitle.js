export default function FormTitle({ title, desc, mb }) {
	return (
		<div className={`col-auto d-flex flex-column text-center py-2 mb-${mb}`}>
			<span className={`text-primary fw-bold ts-${title.size}`}>{title.text}</span>
			<span className={`text-secondary ts-${desc.size}`}>{desc.text}</span>
		</div>
	);
}
