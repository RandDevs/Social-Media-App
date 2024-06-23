export default function HeroImage() {
	return (
		<div className="container w-full flex justify-center items-center relative lg:w-1/2">
			<div className="w-[128px] h-[128px] bg-d-accent absolute blur-[100px] md:w-[256px] md:h-[256px] md:blur-[192px] lg:blur-[256px] lg:w-[365px] lg:h-[365px]"></div>
			<img
				src="/images/person.png"
				alt="person"
				className="p-4 my-4 w-10/12 md:w-3/4 md:my-2 md:p-7 lg:p-2 z-10"
			/>
		</div>
	);
}
