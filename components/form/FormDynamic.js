import { useRef, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

// Icons + Images
import { BiDetail } from "react-icons/bi";
import { RiAddLine, RiCloseLine } from "react-icons/ri";

export default function FormDynamic({ input, mb }) {
	const containerRef = useRef(null);
	const [iconColor, setIconColor] = useState(false);

	const { register, control } = useFormContext();
	const { fields, append, remove } = useFieldArray({ control, name: input.name });

	// Attributes
	const container = `bg-white rounded-4 border-1 ${mb ? `mb-${mb}` : null}`;
	const iconStyle = `me-2 ${iconColor ? "text-primary" : "text-secondary-2"}`;
	const inputContainer = `px-3 ${fields.length >= 1 ? "pb-3" : "pb-0"}`;

	return (
		<>
			<div
				className={container}
				ref={containerRef}
				tabIndex={1}
				onFocus={() => setIconColor(!iconColor)}
				onBlur={() => setIconColor(!iconColor)}
			>
				<div className="d-flex align-items-center bg-white text-secondary ts-14 fw-medium rounded-4" style={{ padding: 18 }}>
					<BiDetail className={iconStyle} size={24} />
					<span>{input.placeholder}</span>
					<RiAddLine className="ms-auto cursor-pointer btn-white-text" size={26} onClick={() => append(`${fields.length + 1}. `)} />
				</div>

				<div className={inputContainer}>
					{fields.map((item, index) => (
						<div className="position-relative d-flex align-items-center w-100 mb-2" key={item.id}>
							<input type="text" className="form-control rounded-4" {...register(`${input.name}[${index}]`)} />
							<RiCloseLine
								className="position-absolute btn-white-text cursor-pointer me-3 end-0"
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
