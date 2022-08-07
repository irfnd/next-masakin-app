import { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";

export default function FormPhotoProfile({ photo = null, input, mb }) {
	const containerRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [errors, setErrors] = useState(null);

	const { register, setValue } = useFormContext();
	const { onChange, name } = register(input.name);

	const onDrop = (accepted, rejected) => {
		setErrors(null);
		if (rejected.length > 0) {
			setErrors(rejected[0].errors.map((error) => error.message));
		} else {
			setSelectedFile({ ...accepted[0], preview: URL.createObjectURL(accepted[0]) });
			setValue("photo", accepted);
		}
	};
	const onClear = () => {
		URL.revokeObjectURL(selectedFile.preview);
		setSelectedFile(null);
		setValue("photo", null);
	};

	const allowedFile = { "image/jpg": [".jpg"], "image/jpeg": [".jpeg"], "image/png": [".png"] };
	const dropzoneOptions = { onDrop, multiple: false, maxFiles: 1, maxSize: 2 * 1000000, accept: allowedFile, noClick: true, noKeyboard: true };
	const { getRootProps, getInputProps, open } = useDropzone(dropzoneOptions);

	// Attributes
	const photoBackground = photo ? `url(${photo})` : `url(/images/profile-placeholder.png)`;
	const container = `d-flex flex-column align-items-center ${mb ? `mb-${mb}` : null}`;

	return (
		<div className={container} ref={containerRef} tabIndex={1}>
			<div
				className="text-end rounded-circle rounded-4 mb-3"
				style={{
					height: 180,
					width: 180,
					backgroundImage: selectedFile ? `url(${selectedFile.preview})` : photoBackground,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="d-flex justify-content-center align-items-end text-center rounded-circle w-100 h-100 p-4" {...getRootProps()}>
					<input type="image" name={name} onChange={onChange} {...getInputProps()} />
				</div>
			</div>
			<div className="d-flex flex-column gap-2 mb-4">
				{!selectedFile && (
					<button type="button" className="btn rounded-3 btn-outline-primary btn-outline-primary-text p-2 px-3" onClick={open}>
						Select Photo
					</button>
				)}

				{selectedFile && (
					<button type="button" className="btn rounded-3 btn-outline-primary btn-outline-primary-text p-2 px-3" onClick={onClear}>
						Cancel Photo
					</button>
				)}

				{photo && (
					<button type="button" className="btn rounded-3 btn-outline-primary btn-outline-primary-text p-2 px-3">
						Delete Photo
					</button>
				)}
			</div>
			<div>
				{errors &&
					errors.map((err, i) => (
						<p key={i} className="text-danger ts-14">
							{err}
						</p>
					))}
			</div>
		</div>
	);
}
