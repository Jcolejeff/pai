import { useLayoutEffect } from "react";
import {
  Button
} from "@material-tailwind/react";
import Navigation from "../components/navigation.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import Faq from "../components/faq.jsx";

export default function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="flex justify-center items-center pt-[100px]">
        <img
          className="my-6 hidden lg:block md:block"
          src="/frame-17.png"
          alt="img map for big screens"
          width={1280}
          height={350}
        />

        <img
          className="my-6 sm:block md:hidden lg:hidden"
          src="/frame-18.png"
          alt="img map for mobile"
          width={360}
          height={200}
        />
      </div>

      <div className="flex flex-col items-start self-stretch mx-auto max-w-[960px] gap-5 lg:gap-4 mb-6 px-3">
        <h6 className="text-sm font-normal">About Pai</h6>
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Pai: The power co-pilot for your home and life
        </h1>
        <p className="text-base font-semibold text-center">
          Written by a &quot;Powerlabber&quot;
        </p>
      </div>

      <div className="mx-auto px-4 py-10 max-w-[960px] text-[18px] lg:text-xl leading-[36px] text-default font-extralight flex flex-col gap-8">
        <p className="italic mt-8">Lagos, Nigeria. 2023 A.D.</p>
        <div>
          <p className="mt-6">
            &quot;Up NEPA!&quot; is a nostalgic cry, rooted in the days of NEPA
            (now PHCN), Nigeria&apos;s electricity authority. Back then, when
            power cuts unexpectedly left us in the dark, we&apos;d lament
            furiously and rejoice with that exclamation, whenever it returned.
            While these emotions persist, they no longer stir the same
            intensity, likely due to adulthood&apos;s pragmatism.{" "}
          </p>

          <p className="mt-6">
            I pondered why we shared these emotions and realized that it was the
            unpredictability! Although I&apos;ve matured, my knowledge of my
            relationship with the power I use, regardless of how available it
            is, has stayed limited to my power bills, yet I believe it can be
            more.
          </p>

          <p className="mt-6">
            What if I could know if I had power in my home without having to be
            there or call anyone? What if I quickly and dynamically understood
            the patterns around when and how long I had power for within a
            certain day or week? What if I immediately knew when these patterns
            changed? Heck, what if I could know when I would lose power before
            it actually happens? Seems crazy right?
          </p>
        </div>

        <div className="flex flex-col max-w-[960px] mx-auto mt-6 text-center gap-4">
          <div id="explainer-video" className="!overflow-x-hidden w-full">
            <video className="h-auto w-full" autoPlay muted loop playsInline>
              <source src="/desktop.webm" type="video/webm" />
              <source src="/desktop.mp4" type="video/mp4" />
              <source src="/desktop.hevc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <p className="mt-6">
            The beauty of the world we live in, is that questions around the
            possibility of a thing or capability seem crazy until that thing is
            done, or that capability is achieved. Pai adds to this beauty in
            that it answers all these seemingly crazy questions with an emphatic
            YES, and indeed changes what consuming power would mean for me and
            you…way beyond the power bills we get. At PowerLabs, we&apos;ve
            built Pai to offer users real-time personalized insights and
            predictions on their power availability patterns, empowering them to
            maximize their personal productivity and optimize their costs. We
            also have plans for an enterprise version that would more closely
            cater to the needs of small/medium businesses, enterprises,
            utilities for a wide range of use cases.
          </p>

          <p className="mt-6">
            I reflect on crazy questions I asked myself and if they could ever
            be answered, it makes Pai a more enjoyable and fulfilling product to
            use…and at PowerLabs, we want to share Pai with everyone, so our
            power user experience for the first time will transcend a monthly
            power utility bill.
          </p>

          <p className="mt-6">
            You can access Pai via any device with an internet connection and it
            has been built for all form-factors. So don&apos;t wait any longer.
            Sign up here to join the waitlist. Get early access
          </p>
        </div>

        <Link to="/waitlist">
          <button className="bg-custom-blue rounded font-normal text-white py-2.5 px-[18px] w-max lg:px-4 lg:py-4">
            Join waitlist
          </button>
        </Link>
      </div>

      <section className="flex flex-col mx-auto max-w-[960px] py-16 px-4 gap-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl lg:text-4xl mb-2">
            Still have questions?
          </h1>
          <p className="text-white/95 font-extralight text-[18px]">
            We answered questions so you do not have to ask them.
          </p>
        </div>

        <Faq />
      </section>

      <div className=" flex flex-col justify-between items-center mx-auto mt-20 mb-8">
        <div className="flex flex-col items-center px-8">
          <p className="font-bold text-3xl lg:text-6xl mb-3 max-w-[620px] text-center">
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
          <img
            className="my-6"
            src="/macbook-pic.png"
            alt="/"
            width={800}
            height={400}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
