import Friendlist from "../components/Friendlist";
import Navbar from "../components/Navbar";

export default function SearchPage() {
	const activePage = "search-page";
	return (
		<>
			<Navbar activePage={activePage} />
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto ">
					{/* Posts container */}
					<div className="w-full h-auto mt-2 " id="postsContainer">
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
				<Friendlist />
			</div>
		</>
	);
}
