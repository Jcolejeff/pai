import { useLayoutEffect } from 'react';
import Navigation from '../components/navigation';

export default function Enterprise() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="text-default h-screen bg-small-circle lg:bg-big-circle bg-no-repeat bg-cover bg-center lg:bg-[center_top_4rem]">
      <Navigation />
      <div className="flex flex-col w-screen">
        <h6 className="text-custom-blue text-center text-[18px] lg:[text-20px] lg:mt-[200px] font-medium mt-[120px]">
          Pai Enterprise
        </h6>
        <h1 className="text-center text-[43px] lg:text-6xl tracking-[24px]  lg:tracking-[1em] mt-4 w-[368px] mx-auto lg:w-max">
          COMING SOON
        </h1>
        {/* <h1 className="text-center text-[43px] lg:text-6xl tracking-[24px]  lg:tracking-[1em] mt-4"></h1> */}
      </div>
    </div>
  );
}
