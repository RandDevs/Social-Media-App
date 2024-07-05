import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
export default function CreatePost() {
	const activePage = "post";
	return (
		<>
			<Navbar activePage={activePage} />
			<PostForm />
		</>
	);
}
