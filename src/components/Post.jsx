export default function Post() {
	return (
		<>
			<div className="w-[calc(100% - 288px)] h-[calc(100vh-73px)] xl:ml-[288px] xl:mt-[73px] p-3">
				<div className="bg-d-primary rounded-md p-3 h-full flex relative">
					<div className="bg-d-secondary w-[40%] h-full border-dashed border-2 border-d-accent">
						<input type="file" value="" />
					</div>
					<div className=" w-[60%] flex flex-col px-4">
						<textarea
							name="description"
							id="description"
							cols="10"
							rows="5"
							className="rounded-md bg-d-secondary text-d-text p-2 text-lg mb-2"
							placeholder="What's on your mind?"
						></textarea>
						<input type="text" className="rounded-md bg-d-secondary h-8" />
						<button className="w-24 h-10 bg-d-accent rounded-md absolute right-3 bottom-3">
							Post
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
