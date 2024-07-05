import { Link, useNavigate } from "react-router-dom";

export default function Error() {
	const navigate = useNavigate();
	return (
		<div class="grid h-screen px-4 bg-d-bgc place-content-center">
			<div class="text-center">
				<h1 class="font-black text-d-text text-9xl">404</h1>

				<p class="text-2xl font-bold tracking-tight text-white sm:text-4xl">
					Uh-oh!
				</p>

				<p class="mt-4 text-d-text">We can't find that page.</p>

				<a
					href="#"
					class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white transition-all opacity-80 bg-d-accent rounded hover:opacity-100 focus:outline-none focus:ring"
					onClick={() => {
						navigate(-1);
					}}
				>
					Go Back Home
				</a>
			</div>
		</div>
	);
}
