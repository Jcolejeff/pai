import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div className="border-t border-t-[#FAFAFA]/[12%] mt-[6rem]">
			<div className=" w-[90%] mx-auto">
				<div className="mt-[3rem] lg:flex justify-between">
					<div>
						<p className="w-full text-left text-[1.25rem] font-medium text-white flex justify-between items-center">
							Subscribe to our newsletter
						</p>
						<p className="text-[#B8CADB] font-normal  text-[1rem] lg:text-[1rem]">
							A monthly digest of the latest news, articles, and resources.
						</p>
					</div>
					<div className="lg:flex gap-2">
						<div>
							<Input
								autoComplete="off"
								name="email"
								type="email"
								placeholder="John@example.com"
								className="lg:mt-1.5 !border !border-default/[12%] px-[0.875rem] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#1018280D] lg:w-[23rem] w-[100%] mt-[2rem]"
							/>
						</div>
						<div>
							<button className="bg-custom-blue rounded-sm font-medium text-white mx-auto px-4 py-2 text-[0.875rem] lg:mt-2 mt-[3rem] w-[100%]">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div className="border-t border-t-[#FAFAFA]/[12%] mt-[1.5rem]"></div>
				<div className="lg:flex mt-12 gap-[5rem]  ">
					<div>
						<img
							src="/assets/landingPageAssets/powerlabLogo.svg"
							alt="Powerlab logo"
						/>
					</div>
					<div className="lg:gap-[10rem] gap-[2rem] lg:mt-0 mt-[2rem] grid grid-cols-2 lg:grid-cols-3">
						{/* <div>
							<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
								COMPANY
							</p>
							<ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
								<>
									<li>Who we are</li>
								</>
								<>
									<li>Our mission</li>
								</>
								<>
									<li>Article and research</li>
								</>
							</ul>
						</div> */}
						<div>
							<div>
								<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
									PRODUCTS
								</p>
								<>
									<p className="text-white text-[1rem] font-normal mt-4">Pai</p>
								</>
							</div>
							<div className="hidden lg:grid mt-4">
								<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
									SUPPORT
								</p>
								<>
									<p className="text-white text-[1rem] font-normal mt-4">
										Contact
									</p>
								</>
							</div>
						</div>
						<div>
							<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
								SOCIAL
							</p>
							<ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
								<Link to="https://www.instagram.com/powerlabshq/">
									<li>Instagram</li>
								</Link>
								<Link to="https://x.com/Powerlabshq">
									<li>Twitter</li>
								</Link>

								<Link to="https://www.linkedin.com/company/powerlabstech/">
									<li>Linkedin</li>
								</Link>
							</ul>
						</div>
						<div className="lg:hidden">
							<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
								SUPPORT
							</p>
							<>
								<p className="text-white text-[1rem] font-normal mt-4">
									Contact
								</p>
							</>
						</div>
					</div>
				</div>
				<div className="lg:flex justify-between  text-[#B8CADB] font-normal  text-[1rem] lg:text-[1rem] mb-12 mt-12 border-t border-t-[#FAFAFA]/[12%]">
					<div className="mt-[3rem]">
						<p>
							&copy; {new Date().getFullYear()} PowerLabs Technologies, Inc. All
							rights reserved.
						</p>
					</div>
					<div className="flex gap-4 mt-[3rem]">
						<Link to="">
							<p>Terms</p>
						</Link>
						<Link to="">
							<p>Privacy</p>
						</Link>
						<Link to="">
							<p>Cookies</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
