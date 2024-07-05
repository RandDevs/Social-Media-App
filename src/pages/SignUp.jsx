import { Link, useNavigate } from "react-router-dom";
import NavbarPlain from "../components/navbarPlain";
import Form from "../components/Form";
import HeroImage from "../components/HeroImage";
export default function SignUp({ handleShowToast }) {
	const navigate = useNavigate(); // Store the navigation function
	const handleSignUp = async (email, password) => {
		const user = {
			email,
			password,
		};

		return fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((response) => {
				handleShowToast(response.status, response.msg);
				if (response.status === "success") navigate("/", { replace: true }); // Perform navigation here
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="bg-d-bgc w-screen h-screen px-6 py-2 xl:py-4 xl:px-12">
			<NavbarPlain />
			<div className="container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:h-[500px]">
				<div className="text-d-text font-open-sans lg:w-1/2">
					<p className="font-semibold opacity-70 text-sm md:text-lg">
						START FOR FREE
					</p>
					<h2 className="text-3xl font-extrabold mb-1  md:text-5xl md:my-2 lg:text-6xl">
						Create new account
					</h2>
					<p className="opacity-70 text-sm md:text-base">
						Already have an account?
						<Link to="/login">
							<span className="pl-1 text-d-accent underline cursor-pointer font-semibold">
								Login
							</span>
						</Link>
					</p>
					<Form type="Sign Up" handleSubmit={handleSignUp} />
				</div>
				<HeroImage />
			</div>
		</div>
	);
}
