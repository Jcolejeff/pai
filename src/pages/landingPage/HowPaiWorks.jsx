import { howItWorks } from "./data";
export default function HowPaiWorks() {
  return (
    <>
      <div className=" px-4 flex flex-col lg:items-center md:items-center  font-general-sans lg:mt-[10rem] mt-[5rem] ">
        <p className="text-secondary-2 text-[1.125rem] font-semibold">
          How Pai Works
        </p>
        <p className="lg:text-center md:text-center lg:text-[3rem] font-semibold text-[2.375rem] lg:leading-[130%] leading-[120%] lg:max-w-[60%] md:max-w-[80%]">
          Intelligent energy management for your business
        </p>
        <p className="lg:text-center md:text-center text-primary-2 font-normal  text-[1rem] lg:text-[1.125rem] md:text-[1.125rem] lg:w-[60%] md:w-[90%] mt-2">
          Pai leverages real-time pattern recognition from historical energy
          data across your power supply sources, using AI, to predict costs and
          reduce losses, accurately size future assets for cheaper procurement
          costs and automatically switch between different
          <span className="hidden lg:inline">
            <br />
          </span>{" "}
          power sources for uninterrupted operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-[3rem]">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="text-center p-4  shadow-md flex flex-col items-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-[1.375rem] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-secondary-3 font-normal text-[1rem] w-[90%] text-center mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
