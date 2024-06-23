import Navbar from "../components/Navbar";

export default function Home() {
	const friends = [
		{
			name: "Rand",
			location: "CEO",
		},
		{
			name: "Excel PPG",
			location: "LA",
		},
		{
			name: "Roy Siregar",
			location: "Bekasi",
		},
		{
			name: "Rifat El-Rasista",
			location: "Bogor",
		},
		{
			name: "Bondan Kecap",
			location: "Dark Planet",
		},
	];
	return (
		<>
			<Navbar />
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto ">
					{/* Input post */}
					<div className="rounded-xl w-full h-fit bg-d-primary p-2 md:p-3">
						<div className="w-full pb-1 flex justify-between items-center md:pb-2">
							<img
								src="/images/default-profile-picture.png"
								alt="profile"
								className="w-8 h-8 rounded-full md:w-10 md:h-10"
							/>
							<input
								type="text"
								name="userPost"
								id="userPost"
								className="rounded-xl outline-none bg-d-secondary font-medium text-d-text mx-1 px-3 py-1 w-3/4 focus:ring-1 focus:ring-d-accent transition-300 md:px-5 md:py-2 md:w-[calc(100%-120px)]"
								placeholder="What's on your mind?"
							/>
							<div className="rounded bg-d-secondary border-[1px] border-d-bgc w-10 h-8 md:w-12 md:h-10"></div>
						</div>
						<div className="w-full pt-1 flex justify-between items-center">
							<label
								for="imagePost"
								className="w-1/4 h-full flex justify-start text-d-accent font-medium cursor-pointer opacity-80 hover:opacity-100 transition-300 items-center md:w-1/3"
							>
								<img
									src="./icons/image.svg"
									alt="image"
									className="h-6 w-6 mr-2 md:h-8 md:w-8"
								/>
								<p className="text-base md:text-lg">Image</p>
							</label>
							<input
								type="file"
								name="imagePost"
								id="imagePost"
								className="hidden"
							/>
							<button
								type="submit"
								className="p-1 bg-d-accent text-d-text rounded-md w-1/6 font-semibold opacity-80 hover:opacity-100 transition-300 text-base md:text-xl md:w-28"
							>
								Post
							</button>
						</div>
					</div>
					{/* End input post */}
					{/* Posts container */}
					<div
						className="w-full h-auto mt-2 "
						id="postsContainer"
					>
						<div className="w-full h-auto flex flex-col bg-d-primary rounded-xl mb-2">
							<div className="flex flex-col p-4 pb-2">
								<div className="w-full h-14 flex items-center" id="headerPost">
									<div
										className="w-12 h-12 rounded-full bg-d-bgc"
										id="image"
									></div>
									<div
										className="flex flex-col px-2 text-d-text"
										id="nameAndLocation"
									>
										<p className="font-bold text-xl">Nama</p>
										<p className="font-semibold opacity-80">location</p>
									</div>
								</div>
								<div className="w-full h-auto pt-2">
									<p className="text-d-text text-lg text-left">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Aspernatur reiciendis, ullam aut quisquam temporibus quod
										placeat repellendus sequi. Quo voluptatem beatae quia at
										minima excepturi nobis, iste veniam quas. Necessitatibus?
									</p>
								</div>
							</div>
							<div className="w-full mb-4">
								<img src="/images/alien.jpg" alt="" />
							</div>
						</div>
						<div className="w-full h-auto flex flex-col bg-d-primary rounded-xl mb-2">
							<div className="flex flex-col p-4 pb-2">
								<div className="w-full h-14 flex items-center" id="headerPost">
									<div
										className="w-12 h-12 rounded-full bg-d-bgc"
										id="image"
									></div>
									<div
										className="flex flex-col px-2 text-d-text"
										id="nameAndLocation"
									>
										<p className="font-bold text-xl">Nama</p>
										<p className="font-semibold opacity-80">location</p>
									</div>
								</div>
								<div className="w-full h-auto pt-2">
									<p className="text-d-text text-lg text-left">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Aspernatur reiciendis, ullam aut quisquam temporibus quod
										placeat repellendus sequi. Quo voluptatem beatae quia at
										minima excepturi nobis, iste veniam quas. Necessitatibus?
									</p>
								</div>
							</div>
							<div className="w-full mb-4">
								<img src="/images/alien.jpg" alt="" />
							</div>
						</div>
					</div>
					{/* End Posts */}
				</div>
				{/* End main content */}

				{/* Friend list */}
				<section className="fixed right-0 w-[28%] hidden h-[calc(100vh-73px)] xl:block">
					<div className="w-full h-full flex flex-col">
						<div className="w-full h-[55%] pb-1 pt-2 pr-2">
							<div className="w-full h-full bg-d-primary rounded-2xl p-4">
								<h1 className="text-d-text font-bold text-xl">Your Friend</h1>
								<hr className="hr my-2" />
								<div class="flex flex-col h-[calc(100%-37px)] overflow-y-auto rounded-lg">
									{friends.map((friend) => {
										return (
											<div className="flex w-full items-center justify-between mb-2 pr-2 text-d-text	 ">
												<img
													src="/images/default-profile-picture.png"
													alt="profile picture"
													className="w-10 rounded-full"
												/>
												<div className="flex flex-col w-[calc(100%-90px)] px-1">
													<p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden">
														{friend.name}
													</p>
													<p className="text-base">{friend.location}</p>
												</div>
												<div className="rounded-full cursor-pointer bg-d-secondary p-2 w-10 h-10 flex items-center">
													<img
														src="/icons/person-add.svg"
														alt="add friend"
														className="w-full"
													/>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className="w-full h-[45%] pt-1 pb-2 pr-2">
							<div className="w-full h-full bg-d-primary rounded-2xl p-4">
								<h1 className="text-d-text font-bold text-xl">
									Suggested Friends
								</h1>
								<hr className="hr my-2" />
								<div class="flex flex-col h-[calc(100%-36px)] overflow-y-auto rounded-lg">
									{friends.map((friend) => {
										return (
											<div className="flex w-full items-center justify-between mb-2 pr-2 text-d-text	 ">
												<img
													src="/images/default-profile-picture.png"
													alt="profile picture"
													className="w-10 rounded-full"
												/>
												<div className="flex flex-col w-[calc(100%-90px)] px-1">
													<p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden">
														{friend.name}
													</p>
													<p className="text-base">{friend.location}</p>
												</div>
												<div className="rounded-full cursor-pointer bg-d-secondary p-2 w-10 h-10 flex items-center">
													<img
														src="/icons/person-add.svg"
														alt="add friend"
														className="w-full"
													/>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
