export default function Friendlist(Friends) {
	// dummy
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
						<h1 className="text-d-text font-bold text-xl">Suggested Friends</h1>
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
	);
}
