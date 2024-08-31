import { Link } from "react-router-dom";
export default function ContactSales() {
	return (
		<>
			<div className=" px-4 lg:flex md:flex  lg:items-center font-general-sans mt-[5rem] ">
				<div className="lg:w-1/2 md:w-1/2 hidden lg:flex  md:flex ">
					<img
						src="../../../assets/landingPageAssets/Contact.png"
						alt="Contact"
					/>
				</div>
				<div className="lg:w-1/2 md:w-1/2">
					<p className="text-secondary-2 text-[1.125rem] font-semibold">
						Contact Sales
					</p>
					<p className="lg:text-[3rem] font-semibold text-[2.375rem] lg:leading-[130%] leading-[120%] lg:max-w-[60%] mt-3">
						Bring Pai to your business today
					</p>
					<p className=" text-primary-2 font-normal  text-[1rem] lg:text-[1.125rem] lg:w-[90%] mt-3">
						Everything you need to optimize your power supply sources and reduce
						energy costs for your operations, all on a single platform. Contact
						us today for a free consultation
					</p>
					<ul className="flex flex-col gap-6 text-secondary-3 text-[1.25rem] font-normal mt-10">
						<li className="flex gap-4 ">
							<img
								src="/assets/landingPageAssets/check.svg"
								alt="Bullet point"
							/>
							<span className="mt-2 gap-4 ">
								Dedicated Account & Success Manager
							</span>
						</li>
						<li className="flex gap-4">
							<img
								src="/assets/landingPageAssets/check.svg"
								alt="Bullet point"
							/>
							<span className="mt-2">Exclusive team features</span>
						</li>
						<li className="flex gap-4">
							<img
								src="/assets/landingPageAssets/check.svg"
								alt="Bullet point"
							/>
							<span className="mt-2">VIP support</span>
						</li>
					</ul>
					<Link to="/">
						<button className="bg-custom-blue rounded-md font-medium text-white mx-auto px-8 py-3 text-[0.875rem] mt-8">
							Talk to sales
						</button>
					</Link>
				</div>
				<div className="lg:w-1/2 lg:hidden md:hidden flex ">
					<img src="/assets/landingPageAssets/Contact.png" alt="Contact" />
				</div>
			</div>
		</>
	);
}
