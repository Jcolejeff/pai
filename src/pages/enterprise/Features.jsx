import { features } from "./data";
export default function Features() {
  const titleColors = ["text-[#F6762C]", "text-blue-500", "text-green-500"];
  return (
    <>
      <div className="px-4 flex flex-col lg:items-center font-general-sans mt-[5rem] lg:w-[95%] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-8 ${
              index < 2 ? "border-b border-[#FFFFFF14] pb-4 mb-4" : ""
            }`}
          >
            <div className="lg:w-1/2">
              <h3
                className={`text-[18px] font-semibold mt-[5rem] ${
                  titleColors[index % titleColors.length]
                }`}
              >
                {feature.title}
              </h3>
              <h4 className="lg:text-[40px] font-semibold text-[32px] lg:leading-[130%] leading-[120%] lg:w-[85%]  mt-4">
                {feature.subtitle}
              </h4>
              <p className="text-[#B8CADB] font-normal text-[16px] lg:text-[18px] lg:w-[85%] lg:mt-[10rem] mt-4">
                {feature.description}
              </p>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden whitespace-nowrap text-lg font-semibold bg-[#0149FF] mt-[5rem]">
        <div className="scrolling-text text-white lg:text-[50px] text-[40px] font-medium py-5">
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
