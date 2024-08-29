import { useState } from "react";

export default function HomeVideoScroll() {
  const [isPlaying, setIsPlaying] = useState(true);


  const handlePlayPause = () => {
    const vid = document.getElementById("vid");
    const vid2 = document.getElementById("vid2");
    if (isPlaying) {
      vid.pause();
      vid2.pause();
    } else {
      vid.play();
      vid2.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="lg:h-[1440px] py-20 px-4 lg:p-20 flex flex-col gap-10 lg:gap-14">
      <p className="font-semibold text-[32px] leading-[120%] lg:text-[48px] text-center max-w-[845px] mx-auto">
        Power Simplified, Humanized, and Useful Everyday
      </p>

      <div className="w-auto h-screen vid-section relative lg:px-20">
        <video
          id="vid"
          className="h-auto w-full hidden lg:block object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/desktop.webm" type="video/webm" />
          <source src="/desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          id="vid2"
          className="h-full w-full lg:hidden block object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/mobile.webm" type="video/webm" />
          <source src="/mobile.mp4" type="video/mp4" />
          <source src="/mobile.hevc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute bottom-2 lg:bottom-20 bg-black rounded-xl right-0 lg:right-20 p-2 mr-4"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M15.834 24.9999V14.9999M24.1673 24.9999V14.9999M36.6673 19.9999C36.6673 29.2047 29.2054 36.6666 20.0007 36.6666C10.7959 36.6666 3.33398 29.2047 3.33398 19.9999C3.33398 10.7952 10.7959 3.33325 20.0007 3.33325C29.2054 3.33325 36.6673 10.7952 36.6673 19.9999Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M20.0007 36.6666C29.2054 36.6666 36.6673 29.2047 36.6673 19.9999C36.6673 10.7952 29.2054 3.33325 20.0007 3.33325C10.7959 3.33325 3.33398 10.7952 3.33398 19.9999C3.33398 29.2047 10.7959 36.6666 20.0007 36.6666Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.834 14.9421C15.834 14.1467 15.834 13.7489 16.0002 13.5269C16.1451 13.3334 16.3668 13.2123 16.6079 13.1951C16.8846 13.1753 17.2192 13.3904 17.8883 13.8206L25.756 18.8783C26.3366 19.2516 26.627 19.4383 26.7272 19.6756C26.8148 19.8829 26.8148 20.1169 26.7272 20.3243C26.627 20.5616 26.3366 20.7482 25.756 21.1215L17.8883 26.1793C17.2192 26.6094 16.8846 26.8245 16.6079 26.8047C16.3668 26.7875 16.1451 26.6665 16.0002 26.473C15.834 26.2509 15.834 25.8532 15.834 25.0577V14.9421Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
