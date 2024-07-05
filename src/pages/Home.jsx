import Friendlist from "../components/Friendlist";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Home() {
	const activePage = "home";
	return (
		<>
			<Navbar activePage={activePage} />
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto pb-[54px] md:pb-[72px] xl:pb-0">
					{/* Posts container */}
					<div className="w-full h-auto mb-2 " id="postsContainer">
						<Post />
						<Post />
						<Post />
					</div>
					{/* End Posts */}
				</div>
				{/* End main content */}
				<Friendlist />
			</div>
		</>
	);
}
