import { useFormContext } from "react-hook-form";

export default function FormTextarea({ mb, input }) {
	const { register, formState } = useFormContext();
	const { errors } = formState;

	// Attributes
	const container = `${mb ? `mb-${mb}` : null}`;
	const textareaStyle = `form-control rounded-4 ${input.bg} ${errors[input.name] && "is-invalid"}`;

	return (
		<div className={container}>
			<div className="input-group has-validation">
				<textarea
					name={input.name}
					className={textareaStyle}
					placeholder={input.placeholder}
					rows={input.rows}
					wrap="soft"
					{...register(input.name)}
				/>
			</div>
			{errors[input.name] && <span className="text-danger ts-14">{errors[input.name].message}</span>}
		</div>
	);
}
