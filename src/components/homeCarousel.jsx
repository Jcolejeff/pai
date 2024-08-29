import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeCarousel() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      const animation = gsap.to(photos, {
        yPercent: 0,
        duration: 1.5,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".right",
        animation: animation,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div className="gallery px-20 lg:flex gap-6 hidden  justify-center">
        <div className="left w-3/4 font-semibold text-[48px] leading-[57px]">
          <div className="desktopContentSection h-screen flex items-center w-[600px]">
            <p className="relative">
              Complex insights that empower you to make informed decisions
              <img
                src="/simplified-icon-sm.png"
                alt=""
                className="absolute -top-10"
              />
            </p>
          </div>
          <div className="desktopContentSection w-[600px] h-screen flex items-center">
            <p>
              Discover practical power tips{" "}
              <span className="relative">
                tailored
                <img
                  src="/humanised-icon.png"
                  alt=""
                  className="absolute -bottom-20 right-0"
                />
              </span>{" "}
              to outages in your area.
            </p>
          </div>
          <div className="desktopContentSection w-[600px] h-screen flex items-center">
            <p className="relative">
              Stay informed with daily power status notifications
              <img
                src="/useful-icon.png"
                alt=""
                className="absolute -bottom-10 left-0"
              />
            </p>
          </div>
        </div>

        <div className="right w-1/2 h-screen flex flex-col justify-center">
          <div className="h-[600px] overflow-hidden relative">
            <div className="desktopPhoto absolute">
              <img
                src="/simplified.png"
                alt="simplified"
                className="object-center"
              />
            </div>
            <div className="desktopPhoto absolute">
              <img
                src="/humanised.png"
                alt="humanised"
                className="object-center"
              />
            </div>
            <div className="desktopPhoto absolute">
              <img src="/useful.png" alt="useful" className="object-center" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobileContent lg:hidden text-[32px] font-semibold leading-[38px] flex flex-col gap-12 px-4 py-20 text-center">
        <div className="relative flex flex-col gap-6">
          <img
            src="/simplified-icon-sm.png"
            alt=""
            className="absolute -top-10"
          />
          <p>Complex insights that empower you to make informed decisions</p>

          <img src="/simplified.png" alt="simplified" />
        </div>

        <div className="flex flex-col gap-6">
          <p>
            Discover practical power tips{" "}
            <span className="relative">
              tailored
              <img
                src="/humanised-icon-sm.png"
                alt=""
                className="absolute -bottom-11 right-0"
              />
            </span>{" "}
            to outages in your area.
          </p>{" "}
          <img src="/humanised.png" alt="simplified" />
        </div>

        <div className="flex flex-col gap-6">
          <p className="relative">
            Stay informed with daily power status notifications{" "}
            <img
              src="/useful-icon-sm.png"
              alt=""
              className="absolute -bottom-5 right-0"
            />
          </p>
          <img src="/useful.png" alt="simplified" />
        </div>
      </div>
    </>
  );
}
