//! THIS IS JUST A TEMPLATE AND WE ARE NOT USING THIS FOR NOW
export default function PostForm() {
	return (
		<>
			<div className="container h-16 lg:hidden"></div>

			<div className="w-[calc(100% - 288px)] sm:h-[calc(100vh-73px)] xl:ml-[288px] xl:mt-[73px] p-3">
				<div className="text-d-text text-4xl w-full text-center font-semibold">
					<p>Create Post</p>
				</div>
				<div className="bg-d-primary rounded-md p-3 h-full flex flex-col gap-3 mb-16 sm:mb-28 lg:mb-24">
					<div className="bg-d-secondary border-dashed border-2 border-d-accent flex grow justify-center content-center">
						{/* <input
              className="block w-full h-60 text-sm file:text-center file:content-center text-slate-500 file:rounded-none file:border-none file:text-sm file:font-semibold file:bg-d-secondary file:text-d-text hover:file:bg-slate-300"
              type="file"
              value=""
            /> */}

						<div class="flex items-center justify-center w-full">
							<label
								for="dropzone-file"
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-none cursor-pointer bg-d-secondary hover:bg-gray-700"
							>
								<div class="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span class="font-semibold">Click to upload</span> or drag
										and drop
									</p>
									<p class="text-xs text-gray-500 dark:text-gray-400">
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								<input id="dropzone-file" type="file" class="hidden" />
							</label>
						</div>
					</div>

					<div className="flex flex-col grow">
						<textarea
							name="description"
							id="description"
							cols="10"
							rows="5"
							className="rounded-md min-h-1 bg-d-secondary text-d-text p-2 text-lg mb-2 md:h-"
							placeholder="What's on your mind?"
						></textarea>
						{/* <input type="text" className="rounded-md bg-d-secondary h-8" /> */}
						<button className="w-24 h-10 bg-d-accent rounded-md mt-3 place-self-end">
							Post
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
