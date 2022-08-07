import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddRecipeSchema } from "@/utils/validations";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Icons + Images
import { BiBookOpen, BiNotepad, BiTask } from "react-icons/bi";

// Components
import FormPhotoRecipe from "@/components/form/FormPhotoRecipe";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormDynamicSingle from "@/components/form/FormDynamicSingle";
import FormDynamicMultiple from "@/components/form/FormDynamicMultiple";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { addRecipeAttr } from "@/constants/formAttributes";

export default function AddRecipeForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);
	const router = useRouter();

	const formOptions = { resolver: yupResolver(AddRecipeSchema) };
	const methods = useForm(formOptions);

	const onSubmit = (data) => {
		const { photo, name, shortDesc, ingredients, steps } = data;
		let formdata = new FormData();

		const formateIngredients = ingredients
			.map((el) => (el.trim().length > 3 ? el : null))
			.filter((el) => el !== null)
			.join("\n");
		const formatedSteps = steps
			.map((el) => (el.step.length > 0 ? el.step : null))
			.filter((el) => el !== null && el !== " " && el !== "")
			.join("\n");
		const formatedVideos = steps
			.map((el, i) => (el.video !== "" ? { name: `Step ${i + 1}`, shordDesc: el.step, video: el.video } : null))
			.filter((el) => el !== null && el !== " " && el !== "");

		formdata.append("photo", photo ? photo[0] : "");
		formdata.append("name", name);
		formdata.append("shortDesc", shortDesc);
		formdata.append("ingredients", formateIngredients);
		formdata.append("steps", formatedSteps);
		formdata.append("videos", formatedVideos.length > 0 ? JSON.stringify(formatedVideos) : "");

		setIsLoading(true);
		recipesWrapper
			.post("/recipes", formdata, getCookie("accessToken"))
			.then((res) => {
				setIsLoading(false);
				setIsSuccess(true);
				setMessage(res.message);
				setTimeout(() => router.push("/"), 3500);
			})
			.catch((err) => {
				setIsSuccess(false);
				setMessage(err?.response?.data?.message);
				setTimeout(() => {
					setIsLoading(false);
					setIsSuccess(null);
					setMessage(null);
				}, 3000);
			});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0">
				<div className="col-auto p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormPhotoRecipe input={{ name: "photo" }} mb={3} disabled={isLoading || isSuccess} />
					<FormInput icon={<BiBookOpen />} input={addRecipeAttr.name} mb={3} />
					<FormTextarea input={addRecipeAttr.shortDesc} mb={3} />
					<FormDynamicSingle icon={<BiNotepad />} input={{ name: "ingredients", placeholder: "Ingredients" }} mb={3} />
					<FormDynamicMultiple icon={<BiTask />} input={{ name: "steps", placeholder: "Steps" }} />
				</div>

				<div className="col-auto p-0 mb-3">
					<button type="submit" className="btn btn-primary rounded-4 text-white w-100" disabled={isLoading || isSuccess}>
						{isLoading && (
							<>
								<span className="spinner-border spinner-border-sm me-3"></span>
								LOADING...
							</>
						)}
						{!isLoading && !isSuccess && "POST"}
						{!isLoading && isSuccess && "YOU POSTED NEW RECIPE"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
