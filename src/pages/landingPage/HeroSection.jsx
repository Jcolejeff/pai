import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Fade, Slide } from "react-awesome-reveal";
export default function HeroSection() {
	return (
		<>
			<div className="w-full lg:min-h-screen pt-[7.5rem] px-4 flex flex-col items-center font-general-sans">
				<Fade
					direction="up"
					triggerOnce
					className="lg:max-w-[40%] md:max-w-[70%]"
				>
					<h1 className="lg:text-center lg:text-[3.5rem] md:text-center md:text-[3.5rem]  font-semibold text-[2.813rem] lg:leading-[110%] leading-[120%] ">
						Minimize Cost. Maximize Uptime.
					</h1>
				</Fade>

				<p className="lg:text-center md:text-center text-primary-2 font-light  text-[1.125rem] lg:text-[1.25rem] md:text-[1.25rem] lg:w-[60%] md:w-[90%] mt-2">
					Pai helps you spend less on operating your power supply sources while
					maintaining the maximum uptime needed to sustain and grow your
					operations.
					<br />
					More energy at the lowest possible cost.
				</p>
				<div className="inter-font flex gap-4 mt-8 w-[100%]  lg:justify-center md:justify-center">
					<Link to="/">
						<button className="bg-custom-blue rounded-md font-medium text-white mx-auto px-8 py-3 text-[0.875rem]">
							Book a demo
						</button>
					</Link>
					<Link to="/">
						<button className="bg-transparent border  border-secondary-6 rounded-md font-medium text-secondary-6 mx-auto px-4 py-[0.5rem] text-[0.875rem] flex items-center">
							Watch webinar{" "}
							<span>
								<HiArrowSmallRight className="text-[1.5rem] ml-2 mt-1" />
							</span>
						</button>
					</Link>
				</div>
				<div className="relative lg:bg-splash bg-no-repeat bg-[center_top_15rem] w-screen mt-10  justify-center bg-contain  flex">
					<img
						src="/assets/landingPageAssets/heroImage.png"
						alt="Dashboard"
						aria-hidden
					/>
				</div>
			</div>
		</>
	);
}
