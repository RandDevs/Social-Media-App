export default function Navbar() {
	return (
		<>
			<nav className="nav-container">
				<h1 className="nav-brand">SociaLink</h1>
				<div className="w-1/2 flex justify-end items-center text-d-text">
					<img
						src="./icons/d-sunny.svg"
						alt="toggle dark mode"
						className="nav-icon mx-2"
					/>
					<img
						src="./icons/d-settings.svg"
						alt="settings"
						className="nav-icon"
					/>
				</div>
			</nav>
			{/* End navbar */}

			{/* Sidebar */}
			<aside className="sidebar-container">
				<div className="container-sidebar-icon xl:order-3 xl:bg-d-secondary">
					<img
						src="./icons/home-active.svg"
						alt="home"
						className="sidebar-icon"
					/>
					<p className="hidden xl:block font-bold text-xl px-1 text-d-accent xl:-mb-1">
						Home
					</p>
				</div>
				<hr className="hr order-2" />
				<div className="container-sidebar-icon xl:order-1">
					<img src="./icons/d-search.svg" alt="home" className="sidebar-icon" />
					<p className="sidebar-text">Search</p>
				</div>
				<div className="container-sidebar-icon xl:my-3 xl:order-4">
					<img
						src="./icons/d-notifications.svg"
						alt="home"
						className="sidebar-icon"
					/>
					<p className="sidebar-text">Post</p>
				</div>
				<div className="w-12 h-12 hover:bg-d-secondary transition-300 rounded p-2 cursor-pointer md:w-16 md:h-16 md:p-3 xl:flex xl:items-center xl:justify-start xl:w-full xl:p-2 xl:rounded-lg xl:h-14 xl:order-5">
					<img
						src="/images/default-profile-picture.png"
						alt="home"
						className="w-full h-full rounded-full xl:w-14 xl:h-14 xl:p-2"
					/>
					<p className="sidebar-text">Profile</p>
				</div>
				<hr className="hr order-6" />
			</aside>
			{/* End sidebar */}
		</>
	);
}
