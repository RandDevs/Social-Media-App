import { useRef, useState } from "react";

export default function Form({ type, handleSubmit }) {
	const email = useRef(null);
	const password = useRef(null);
	const [showPassword, setShowPassword] = useState(false);
	return (
		<form
			action="POST"
			className="flex flex-col w-full py-2 lg:mt-4"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(email.current.value, password.current.value);
			}}
		>
			<div className="relative w-full md:w-2/3">
				<input
					type="email"
					name="email"
					id="email"
					required
					ref={email}
					autoComplete="off"
					placeholder="Email"
					className="bg-d-secondary w-full pl-4 pr-12 py-4 text-sm rounded-lg my-1 outline-none focus:ring-2 focus:ring-d-accent transition-all duration-300 font-medium tracking-wider md:pr-14 md:text-base lg:rounded-2xl"
				/>
				<img
					src="./icons/mail.svg"
					alt="email icon"
					className="absolute right-4 top-1/2 w-6 -translate-y-1/2 md:w-8"
				/>
			</div>
			<div className="container relative w-full md:w-2/3">
				<input
					type={showPassword ? "text" : "password"}
					name="password"
					id="password"
					ref={password}
					required
					placeholder="Password"
					className="bg-d-secondary w-full pl-4 pr-12 py-4 text-sm rounded-lg my-1 outline-none tracking-wider focus:ring-2 focus:ring-d-accent transition-all duration-300 font-medium md:my-2 md:pr-14 md:text-base lg:rounded-2xl"
				/>
				
					<img
						src={`./icons/${showPassword ? "eye-off" : "eye"}.svg`}
						alt="email icon"
						className="absolute right-4 top-1/2 w-6 -translate-y-1/2 cursor-pointer md:w-8"
	
						onClick={() => {
						  setShowPassword(!showPassword)
							console.log(showPassword)
						}}
					/>
				
			</div>
			<button
				className="w-36 bg-d-accent opacity-80 text-d-text text-sm p-2.5 rounded-xl my-1 font-semibold hover:opacity-100 transition-all duration-300 md:text-base md:p-3 md:w-40 lg:rounded-2xl"
				type="submit"
			>
				{type}
			</button>
		</form>
	);
}
