import { ToastContainer, toast } from "react-toastify";
import { toastConfig } from "@/utils/toastify";

export default function FormToast({ isSuccess, message }) {
	if (isSuccess === null) toast.dismiss();
	if (isSuccess) toast.success(message, toastConfig);
	else toast.error(message, toastConfig);

	return <ToastContainer limit={1} />;
}
