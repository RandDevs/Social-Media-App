export default function CreateProfile() {
	return (
		<>
			<div className="w-screen h-screen overflow-hidden flex items-center justify-center shadow-lg relative">
				<div className="flex flex-col lg:w-3/5 bg-d-primary rounded-lg overflow-hidden items-center justify-center w-4/5">
					<div className="w-full h-32 bg-d-text rounded-lg relative group md:h-40 md:rounded-xl">
						<div className="w-full h-full bg-d-secondary opacity-0 rounded-lglg:rounded-xl text-d-text lg:text-5xl text-2xl flex justify-center items-center transition-all duration-300 group-hover:opacity-80 cursor-pointer">
							Upload Banner
						</div>
						<div className="rounded-full bg-d-text w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center bg-cover absolute lg:-bottom-5 lg:right-4 -bottom-4 right-2 backdrop:cursor-pointer transition-all duration-300 hover:bg-d-secondary shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)]">
							<img
								src="./icons/pencil.svg"
								alt="upload"
								className="lg:w-8 lg:h-8 w-5 h-5"
							/>
						</div>
					</div>
					<div className="rounded-full lg:w-24 lg:h-24 w-16 h-16 bg-d-text -translate-y-1/2 shadow-inner ring-2 ring-d-primary group bg-cover cursor-pointer">
						<img
							src="default-profile-picture.png"
							alt=""
							className="bg-cover rounded-full w-full h-full"
						/>
						<div className="rounded-full bg-d-text lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center bg-cover absolute -bottom-2 right-0 cursor-pointer transition-all duration-300 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] hover:bg-d-secondary">
							<img
								src="./icons/pencil.svg"
								alt="upload"
								className="lg:w-6 lg:h-6 w-4 h-4"
							/>
						</div>
					</div>
					<form
						action=""
						className="flex flex-col lg:w-1/2 w-3/4 h-84 items-center justify-between lg:-mt-8 -mt-4 py-4 lg:py-2"
					>
						<div className="container lg:mb-2">
							<label
								htmlFor="displayName"
								className="text-d-text lg:py-2 py-1 font-bold font-poppins cursor-pointer lg:text-lg text-base after:content-['*'] after:text-red-500"
							>
								Display name
							</label>
							<input
								type="textarea"
								name="displayName"
								id="displayName"
								required
								className="text-d-text lg:my-1 my-2 lg:px-4 lg:py-2 py-3 px-3 font-medium font-open-sans lg:text-base text-sm bg-d-secondary rounded-lg w-full outline-none focus:ring-2 focus:ring-d-accent transition-all duration-300"
							/>
						</div>
						<div className="container">
							<label
								htmlFor="bio"
								className="text-d-text py-1 mt-1 font-bold font-poppins cursor-pointer lg:text-lg text-base"
							>
								Bio
							</label>

							<textarea
								name="bio"
								id="bio"
								cols="30"
								rows="4"
								className="text-d-text lg:py-2 lg:px-4 py-1 px-2 my-2 lg:my-1 font-medium lg:text-base text-sm font-open-sans bg-d-secondary rounded-lg w-full outline-none focus:ring-2 focus:ring-d-accent transition-all duration-300 resize-none"
								placeholder="(optional)"
							></textarea>
						</div>
						<div className="container lg:mt-2">
							<label
								htmlFor="location"
								className="text-d-text mt-1 lg:py-2 py-1 font-bold lg:text-lg text-base font-poppins cursor-pointer"
							>
								Location
							</label>
							<input
								type=""
								name="location"
								id="location"
								placeholder="(optional)"
								className="text-d-text lg:px-4 py-3 px-3 my-2 lg:my-1 lg:text-base text-sm font-medium font-open-sans bg-d-secondary rounded-lg w-full outline-none focus:ring-2 focus:ring-d-accent transition-all duration-300"
							/>
						</div>
					</form>
					<div className="flex justify-between w-full my-2">
						<div className="group">
							<div className="w-[365px] h-[365px] rounded-full bg-red-800 absolute -bottom-[200px] -left-[300px] lg:-left-[200px] blur-[256px] -z-10 animate-bounce-slow group-hover:-bottom-[125px] group-hover:bg-red-700 transition-all"></div>
							<button className="lg:w-24 w-20 bg-red-700 p-2 lg:rounded-xl rounded-lg font-semibold text-d-text ml-2 lg:text-base text-sm opacity-80 transition-all duration-300 hover:opacity-100">
								<a
									href="./login.html"
									className="w-full h-full rounded-[inherit]"
								>
									Back
								</a>
							</button>
						</div>
						<div className="group">
							<div className="w-[365px] h-[365px] rounded-full bg-d-accent absolute -bottom-[200px] -right-[300px] lg:-right-[200px] blur-[256px] -z-10 animate-bounce-slow opacity-80 group-hover:-bottom-[125px] transition-all group-hover:bg-d-accent/100"></div>
							<button className="lg:w-24 w-20 bg-d-accent/70 p-2 lg:rounded-xl rounded-lg font-semibold text-d-text mr-2 opacity-80 text-sm transition-all duration-300 hover:opacity-100">
								<a
									href="./home.html"
									className="w-full h-full rounded-[inherit]"
								>
									Next
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
