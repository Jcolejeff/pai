import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function HeroSection() {
	return (
		<>
			<div className="w-full lg:min-h-screen pt-[120px] px-4 flex flex-col items-center font-general-sans">
				<p className="lg:text-center lg:text-[56px] font-semibold text-[45px] lg:leading-[110%] leading-[120%] lg:max-w-[40%]">
					Minimize Cost. Maximize Uptime.
				</p>
				<p className="lg:text-center text-[#B8CADB] font-light  text-[18px] lg:text-[20px] lg:w-[60%] mt-2">
					Pai helps you spend less on operating your power supply sources while
					maintaining the maximum uptime needed to sustain and grow your
					operations.
					<br />
					More energy at the lowest possible cost.
				</p>
				<div className="inter-font flex gap-4 mt-8 w-[100%]  lg:justify-center">
					<Link to="/">
						<button className="bg-custom-blue rounded-md font-medium text-white mx-auto px-8 py-3 text-[14px]">
							Book a demo
						</button>
					</Link>
					<Link to="/">
						<button className="bg-transparent border  border-[#E6F0FF] rounded-md font-medium text-[#E6F0FF] mx-auto px-4 py-[0.5rem] text-[14px] flex items-center">
							Watch webinar{" "}
							<span>
								<HiArrowSmallRight className="text-[24px] ml-2 mt-1" />
							</span>
						</button>
					</Link>
				</div>
				<div className="relative lg:bg-splash bg-no-repeat bg-[center_top_15rem] w-screen mt-10  justify-center bg-contain  flex">
					<img
						src="/public/assets/landingPageAssets/heroImage.png"
						alt="Dashboard"
						aria-hidden
					/>
				</div>
			</div>
		</>
	);
}
