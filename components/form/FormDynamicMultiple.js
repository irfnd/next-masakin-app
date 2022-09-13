import { cloneElement, useRef, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

// Icons + Images
import { RiAddLine, RiCloseLine } from "react-icons/ri";

export default function FormDynamicSingle({ icon, input, mb }) {
	const containerRef = useRef(null);
	const [iconColor, setIconColor] = useState(false);

	const { register, control } = useFormContext();
	const { fields, append, remove } = useFieldArray({ control, name: input.name });

	// Attributes
	const container = `bg-white rounded-4 border-1 ${mb ? `mb-${mb}` : null}`;
	const iconStyle = `me-2 ${iconColor ? "text-primary" : "text-secondary-2"}`;
	const inputContainer = `d-flex flex-column gap-4 px-3 ${fields.length >= 1 ? "pb-3" : "pb-0"}`;

	return (
		<>
			<div
				className={container}
				ref={containerRef}
				tabIndex={1}
				onFocus={() => setIconColor(!iconColor)}
				onBlur={() => setIconColor(!iconColor)}
			>
				<div
					className="d-flex align-items-center bg-white text-secondary ts-14 fw-medium rounded-4"
					style={{ padding: 18 }}
				>
					{cloneElement(icon, { className: iconStyle, size: 24 })}
					<span>{input.placeholder}</span>
					<RiAddLine
						className="ms-auto cursor-pointer btn-white-text"
						size={26}
						onClick={() => append({ step: `${fields.length + 1}. `, video: "" })}
					/>
				</div>

				<div className={inputContainer}>
					{fields.map((item, index) => (
						<div className="position-relative d-flex flex-column align-items-center w-100 rounded-4" key={item.id}>
							<input
								type="text"
								className="form-control rounded-4 mb-2"
								placeholder="Step description"
								{...register(`${input.name}[${index}].step`)}
								onFocus={() => setIconColor(!iconColor)}
								onBlur={() => setIconColor(!iconColor)}
							/>
							<input
								type="text"
								className="form-control rounded-4"
								placeholder="Video step URL or leave it empty"
								{...register(`${input.name}[${index}].video`)}
								onFocus={() => setIconColor(!iconColor)}
								onBlur={() => setIconColor(!iconColor)}
							/>
							<RiCloseLine
								className="position-absolute btn-white-text cursor-pointer me-3 mt-3 end-0 top-0"
								size={26}
								style={{ zIndex: 10 }}
								onClick={() => remove(index)}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
