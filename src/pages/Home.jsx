import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Loading from "../components/loading";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HomeVideoScroll from "../components/homeVideoScroll";
import HomeCarousel from "../components/homeCarousel";
import Faq from "../components/faq";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [showNav, setShowNav] = React.useState(false);

  const lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setShowNav(true);
    }, 2500);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {<Navigation />}
      <div className="min-h-screen w-screen relative">
        <div className="w-full min-h-screen pt-[120px] px-4 flex flex-col items-center">
          <div className="max-w-[804px] flex flex-col items-center gap-4">
            <p className="text-[18px] text-shadow text-center">
              Introducing <span className="text-custom-blue">Pai</span>
            </p>
            <p className="text-center text-[32px] font-semibold lg:text-[48px] lg:leading-[125%] leading-[120%] max-w-[750px]">
              The power co-pilot for your home, business and life
            </p>
            <p className="text-center text-[#eee] font-light text-[18px]">
              Plan Ahead, Minimize Disruptions: Power Outage Insights at Your Fingertips
            </p>
            <Link to="/waitlist">
              <button className="bg-custom-blue rounded font-semibold leading-5 text-white mx-auto p-2">
                Join waitlist
              </button>
            </Link>
          </div>
          <div className="relative lg:bg-splash bg-no-repeat bg-[center_top_2rem] w-screen mt-20 flex justify-center bg-contain">
            <img src="/phone.png" alt="iphone" aria-hidden />
          </div>

          <div className="max-w-[804px] mb-14 flex flex-col items-center gap-4">
            <p className="text-center text-[32px] font-semibold lg:text-[48px] lg:leading-[125%] leading-[120%]">
              Let your power mean more to you than just a utility bill
            </p>
            <p className="text-center text-[#eee] font-light text-[18px]">
              Understand power patterns in locations you care about
            </p>
            <a href="/about">
              <button className="border-[0.5px] border-default rounded font-medium leading-5 text-white mx-auto p-2 mt-4 px-4">
                Learn more
              </button>
            </a>
          </div>
        </div>
        <div id="explainer-video" className=" w-full">
          <HomeVideoScroll />
        </div>
        {showNav && (
          <div id="carousel">
            <HomeCarousel />
          </div>
        )}
        <div className="flex flex-col mx-auto max-w-[960px] py-16 px-4 gap-10">
          <div className="text-center">
            <h1 className="font-bold text-[32px] lg:text-[48px] mb-2">Still have questions?</h1>
            <p className="text-white/95 font-extralight text-[18px]">
              We answered questions so you do not have to ask them.
            </p>
          </div>

          <Faq />
        </div>

        <div className="flex flex-col justify-between items-center mx-auto mt-20 mb-8">
          <div className="flex flex-col items-center">
            <p className="font-bold text-[32px] lg:text-[48px] mb-3 max-w-[620px] text-center px-8">
              Redefine how you interact with power
            </p>
            <div className="flex gap-6 items-center">
              <Link to="/waitlist">
                <button className="bg-custom-blue rounded font-semibold leading-5 text-white my-6 mx-auto p-2 px-4">
                  Join waitlist
                </button>
              </Link>
              {/* <a href="http://dev.powerlabstech.com/">
                <Button
                  variant="gradient"
                  size="sm"
                  className="inline-block mr-4 lg:mr-0 normal-case bg-[#0F1015] bg-none border rounded border-[#FAFAFA]"
                >
                  Sign in
                </Button>
              </a> */}
            </div>
          </div>
          <div>
            <img className="my-6" src="/macbook-pic.png" alt="/" width={800} height={400} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function Icon({ id, open }) {
  return (
    <div className="flex items-center">
      {id === open ? (
        <img src="/close-icon.png" width={30} height={30} alt="close" />
      ) : (
        <img src="/open-icon.png" width={30} height={30} alt="open" />
      )}
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};
