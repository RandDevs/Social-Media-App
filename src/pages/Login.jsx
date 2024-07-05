import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import NavbarPlain from "../components/navbarPlain";
import HeroImage from "../components/HeroImage";

export default function Login({ handleShowToast }) {
	const navigate = useNavigate(); // Store the navigation function
	const handleLogIn = async (email, password) => {
		const user = {
			email,
			password,
		};

		return fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((response) => {
				handleShowToast(response.status, response.msg);
				if (response.status === "success") {
					console.log(response.accessToken);
					navigate("/create", {
						state: { token: response.accessToken, _id: response._id },
					});
				} // Perform navigation here
			})
			.catch((err) => {
				handleShowToast("error", "Internal server error!");
				console.log(err);
			});
	};

	return (
		<div className="bg-d-bgc w-screen h-screen px-6 py-2 xl:py-4 xl:px-12">
			<NavbarPlain />
			<div className="container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:h-[500px] lg:py-4">
				<div className="text-d-text font-open-sans lg:w-1/2 z-10">
					<h2 className="text-3xl font-extrabold mb-1 mt-5 md:text-5xl md:mt-9 md:mb-2 lg:text-6xl">
						Welcome Back!
					</h2>
					<p className="opacity-70 text-sm md:text-base">
						Don&lsquo;t have an account?
						<Link to="/Signup">
							<span className="pl-1 text-d-accent underline cursor-pointer font-semibold">
								Sign up
							</span>
						</Link>
					</p>
					<Form type="Log in" handleSubmit={handleLogIn} />
				</div>
				<HeroImage />
			</div>
		</div>
	);
}
