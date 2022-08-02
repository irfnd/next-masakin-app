import { cloneElement, useState } from "react";

// Icons + Images
import { BiShow, BiHide } from "react-icons/bi";

export default function FormInput({ mb, icon, input, form }) {
	const [showPassword, setShowPassword] = useState(false);
	const [iconColor, setIconColor] = useState(false);
	const { onChange, name, ref } = form.register(input.name);

	const changeIconColor = () => setIconColor(!iconColor);

	return (
		<div className={`${mb ? `mb-${mb}` : null}`}>
			<div className="position-relative d-flex align-items-center w-100">
				{cloneElement(icon, {
					className: `position-absolute ms-3 ${form.errors[input.name] ? "text-danger" : iconColor ? "text-primary" : "text-secondary-2"}`,
					size: 24,
					style: { zIndex: 10 },
				})}
				<div className="input-group has-validation">
					<input
						type={input.type === "password" ? (showPassword ? "text" : input.type) : input.type}
						name={name}
						className={`form-control ${input.bg} ${form.errors[input.name] && "is-invalid"} ps-5`}
						placeholder={input.placeholder}
						onFocus={changeIconColor}
						onBlur={changeIconColor}
						onChange={onChange}
						ref={ref}
					/>
				</div>
				{input.type === "password" && (
					<>
						{showPassword ? (
							<BiHide
								className="position-absolute text-primary show-icon me-3 end-0"
								size={26}
								onClick={() => setShowPassword(!showPassword)}
								style={{ zIndex: 10 }}
							/>
						) : (
							<BiShow
								className="position-absolute text-primary show-icon me-3 end-0"
								size={26}
								onClick={() => setShowPassword(!showPassword)}
								style={{ zIndex: 10 }}
							/>
						)}
					</>
				)}
			</div>
			{form.errors[input.name] && <span className="text-danger ts-14">{form.errors[input.name].message}</span>}
		</div>
	);
}
