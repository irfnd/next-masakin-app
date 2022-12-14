import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSWRConfig } from "swr";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { getCookie } from "cookies-next";
import profileWrapper from "@/utils/axios/profileWrapper";
import { authActions } from "@/utils/redux/slices/authSlice";

// Components
import QuestionModal from "@/components/modals/QuestionModal";

export default function FormPhotoProfile({
	photo = null,
	input,
	isLoading,
	setIsLoading,
	setIsSuccess,
	setMessage,
	mb,
}) {
	const { mutate } = useSWRConfig();

	const containerRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [errors, setErrors] = useState(null);
	const [showModal, setShowModal] = useState(null);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

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

	const onOkModal = () => {
		setIsLoading(true);
		profileWrapper
			.deletePhoto("/profile/photo", getCookie("accessToken"))
			.then((res) => {
				setIsSuccess(true);
				setMessage(res.message);
				dispatch(authActions.update({ ...user, photo: null, photoName: null }));
				setTimeout(() => {
					setIsLoading(false);
					setIsSuccess(null);
					setMessage(null);
					setShowModal(false);
					mutate("/profile");
				}, 3000);
			})
			.catch((err) => {
				setIsSuccess(false);
				setMessage(err?.response?.data?.message);
				setTimeout(() => {
					setIsLoading(false);
					setIsSuccess(null);
					setMessage(null);
					setShowModal(false);
					mutate("/profile");
				}, 3000);
			});
	};

	const allowedFile = { "image/jpg": [".jpg"], "image/jpeg": [".jpeg"], "image/png": [".png"] };
	const dropzoneOptions = {
		onDrop,
		multiple: false,
		maxFiles: 1,
		maxSize: 2 * 1000000,
		accept: allowedFile,
		noClick: true,
		noKeyboard: true,
	};
	const { getRootProps, getInputProps, open } = useDropzone(dropzoneOptions);

	// Attributes
	const photoBackground = photo ? `url(${photo})` : `url(/images/profile-placeholder.png)`;
	const container = `d-flex flex-column align-items-center ${mb ? `mb-${mb}` : null}`;
	const checkedPhoto = selectedFile ? `url(${selectedFile.preview})` : photoBackground;
	const photoStyle = {
		height: 180,
		width: 180,
		backgroundImage: checkedPhoto,
		backgroundPosition: "center",
		backgroundSize: "cover",
	};

	return (
		<div className={container} ref={containerRef} tabIndex={1}>
			<div className="text-end rounded-circle rounded-4 mb-3" style={photoStyle}>
				<div
					className="d-flex justify-content-center align-items-end text-center rounded-circle w-100 h-100 p-4"
					{...getRootProps()}
				>
					<input type="image" name={name} onChange={onChange} {...getInputProps()} />
				</div>
			</div>

			<div className="d-flex flex-column w-50 gap-2 mb-4">
				{!selectedFile && (
					<button
						type="button"
						className="btn rounded-3 btn-primary text-white p-2 px-4"
						onClick={open}
						disabled={isLoading}
					>
						Select Photo
					</button>
				)}

				{selectedFile && (
					<button
						type="button"
						className="btn rounded-3 btn-danger text-white p-2 px-4"
						onClick={onClear}
						disabled={isLoading}
					>
						Change Photo
					</button>
				)}

				{photo && (
					<button
						type="button"
						className="btn rounded-3 btn-outline-danger btn-outline-danger-text p-2 px-4"
						onClick={() => setShowModal(true)}
						disabled={isLoading}
					>
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

			<QuestionModal
				modal={{
					isShow: showModal,
					title: "Delete Your Profile Photo",
					content: "Are you sure to delete your profile photo?",
					centered: true,
				}}
				hideModal={() => setShowModal(false)}
				okBtn={{
					text: "Delete",
					className: "btn btn-outline-danger btn-outline-danger-text py-2 px-3",
					okClick: onOkModal,
					disabled: isLoading,
				}}
				cancelBtn={{ text: "Cancel", className: "btn btn-primary text-white py-2 px-3", disabled: isLoading }}
			/>
		</div>
	);
}
