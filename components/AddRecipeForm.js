import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Icons + Images
import { BiBookOpen, BiNotepad, BiTask } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormDynamic from "@/components/form/FormDynamic";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { addRecipeAttr } from "@/constants/formAttributes";

export default function AddRecipeForm() {
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver() };
	const methods = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0">
				<div className="col-auto p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormInput icon={<BiBookOpen />} input={addRecipeAttr.name} mb={3} />
					<FormTextarea input={addRecipeAttr.shortDesc} mb={3} />
					<FormDynamic icon={<BiNotepad />} input={{ name: "ingredients", placeholder: "Ingredients" }} mb={3} />
					{/* <FormDynamic icon={<BiTask />} input={{ name: "steps", placeholder: "Steps" }} /> */}
				</div>

				<div className="col-auto p-0 mb-3">
					<button type="submit" className="btn btn-primary rounded-4 text-white w-100">
						POST
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
