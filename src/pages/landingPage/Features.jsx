import { Fade, Slide } from "react-awesome-reveal";
import { features } from "./data";
export default function Features() {
	const titleColors = ["text-secondary-2", "text-blue-500", "text-green-500"];
	return (
		<>
			<div className="px-4 flex flex-col lg:items-center font-general-sans mt-[5rem] lg:w-[95%] mx-auto">
				{features.map((feature, index) => (
					<div
						key={index}
						className={`flex flex-col lg:flex-row md:flex-row items-center lg:items-start justify-between lg:space-x-8 ${
							index < 2 ? "border-b border-secondary-5 pb-4 mb-4" : ""
						}`}
					>
						<div className="lg:w-1/2 md:w-1/2">
							<Fade direction="up" triggerOnce>
								<h3
									className={`text-[1.13rem] font-semibold mt-[5rem] ${
										titleColors[index % titleColors.length]
									}`}
								>
									{feature.title}
								</h3>
							</Fade>

							<h4 className="lg:text-[2.5rem] md:text-[1.8rem] font-semibold text-[2rem] lg:leading-[130%] leading-[120%] lg:w-[85%]  mt-4">
								{feature.subtitle}
							</h4>
							<p className="text-primary-2 font-normal text-[1rem] md:text-[0.9rem] lg:text-[1.13rem]  lg:w-[85%]   md:w-[90%] lg:mt-[10rem] mt-4">
								{feature.description}
							</p>
						</div>
						<div className="lg:w-1/2 md:w-1/2 mt-4 lg:mt-0">
							<Slide triggerOnce direction="right">
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-auto object-cover"
								/>
							</Slide>
						</div>
					</div>
				))}
			</div>
			<div className="overflow-hidden whitespace-nowrap text-lg font-semibold bg-secondary-1 mt-[5rem]">
				<div className="scrolling-text text-white lg:text-[3.13rem] text-[2.5rem] font-medium py-5">
					Optimal sizing. Real-time control. Predictive analytics. Cost
					reduction. Optimal sizing. Real-time control. Predictive analytics.
					Cost reduction. Optimal sizing. Real-time control. Predictive
					analytics. Cost reduction. Optimal sizing. Real-time control.
					Predictive analytics. Cost reduction. Optimal sizing. Real-time
					control. Predictive analytics. Cost reduction. Optimal sizing.
					Real-time control. Predictive analytics. Cost reduction.
				</div>
			</div>
		</>
	);
}
