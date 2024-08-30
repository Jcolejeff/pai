import { howItWorks } from "./data";
export default function HowPaiWorks() {
  return (
    <>
      <div className=" px-4 flex flex-col lg:items-center font-general-sans mt-[10rem] ">
        <p className="text-[#F6762C] text-[18px] font-semibold">
          How Pai Works
        </p>
        <p className="lg:text-center lg:text-[48px] font-semibold text-[38px] lg:leading-[130%] leading-[120%] lg:max-w-[60%]">
          Intelligent energy management for your business
        </p>
        <p className="lg:text-center text-[#B8CADB] font-normal  text-[16px] lg:text-[18px] lg:w-[60%] mt-2">
          Pai leverages real-time pattern recognition from historical energy
          data across your power supply sources, using AI, to predict costs and
          reduce losses, accurately size future assets for cheaper procurement
          costs and automatically switch between different
          <span className="hidden lg:inline">
            <br />
          </span>
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
              <h3 className="text-[22px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[#F1F1F1] font-normal text-[16px] w-[90%] text-center mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
