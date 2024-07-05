import { NavLink } from "react-router-dom";
export default function Navbar({ activePage }) {
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
				<NavLink
					to="/home"
					className={`container-sidebar-icon xl:order-3 ${
						activePage === "home" ? "bg-d-secondary" : ""
					}`}
				>
					<img
						src={`./icons/home${activePage === "home" ? "-active" : ""}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`hidden xl:block text-xl px-1 xl:-mb-1 ${
							activePage === "home"
								? "font-bold text-d-accent"
								: "font-semibold text-d-text"
						}`}
					>
						Home
					</p>
				</NavLink>

				<hr className="hr order-2" />
				<NavLink
					to="/search-page"
					className={`container-sidebar-icon xl:order-1 mb-0 ${
						activePage === "search-page" ? "bg-d-secondary" : ""
					}`}
				>
					<img
						src={`./icons/d-search${
							activePage === "search-page" ? "-active" : ""
						}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "search-page" ? "text-d-accent font-bold" : ""
						}`}
					>
						Search
					</p>
				</NavLink>
				<NavLink
					to="/post"
					className={`container-sidebar-icon xl:order-4 ${
						activePage === "post" ? "bg-d-secondary" : ""
					}`}
				>
					<img
						src={`./icons/d-post${activePage === "post" ? "-active" : ""}.svg`}
						alt="post"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "post" ? "text-d-accent font-bold" : ""
						}`}
					>
						Post
					</p>
				</NavLink>
				<NavLink
					to="/notification"
					className={`container-sidebar-icon xl:order-5 ${
						activePage === "notification" ? "bg-d-secondary" : ""
					}`}
				>
					<img
						src={`./icons/d-notifications${
							activePage === "notification" ? "-active" : ""
						}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "notification" ? "text-d-accent font-bold" : ""
						}`}
					>
						Notification
					</p>
				</NavLink>
				<NavLink
					to="/profile"
					className={`w-12 h-12 hover:bg-d-secondary transition-300 rounded p-2 cursor-pointer md:w-16 md:h-16 md:p-3 xl:flex xl:items-center xl:justify-start xl:w-full xl:p-2 xl:rounded-lg xl:h-14 xl:order-5 ${
						activePage === "profile" ? "bg-d-secondary" : ""
					}`}
				>
					<img
						src="/images/default-profile-picture.png"
						alt="home"
						className="w-full h-full rounded-full xl:w-14 xl:h-14 xl:p-2"
					/>
					<p
						className={`sidebar-text ${
							activePage === "profile" ? "text-d-accent font-bold" : ""
						}`}
					>
						Profile
					</p>
				</NavLink>
				<hr className="hr order-6" />
			</aside>
			{/* End sidebar */}
		</>
	);
}
