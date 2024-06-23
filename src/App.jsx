import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";
import CreatePost from "./pages/CreatePost";
import handleShowToast from "./functions/showToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../public/style.css"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login handleShowToast={handleShowToast} />} />
				<Route
					path="/signup"
					element={<SignUp handleShowToast={handleShowToast} />}
				/>
				<Route
					path="/create"
					element={<CreateProfile handleShowToast={handleShowToast} />}
				/>
				<Route path="/post" element={<CreatePost />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme="dark"
			/>
		</>
	);
}

export default App;
