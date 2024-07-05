import { toast } from "react-toastify";

const handleShowToast = (type, message) => {
	const notificationProps = {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: "dark",
	};

	switch (type) {
		case "success":
			toast.success(message, notificationProps);
			break;
		case "error":
			toast.error(message, notificationProps);
			break;
		case "info":
			toast.info(message, notificationProps);
			break;
		case "warning":
			toast.warning(message, notificationProps);
			break;

		default:
			toast(message, notificationProps);
			break;
	}
};

export default handleShowToast;
