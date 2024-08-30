import {
  Input
} from "@material-tailwind/react";
export default function Footer() {
  return (
    <div className="border-t border-t-[#FAFAFA]/[12%] mt-[6rem]">
      <div className=" w-[90%] mx-auto">
        <div className="mt-[3rem] flex justify-between">
          <div>
            <p className="w-full text-left text-[20px] font-medium text-white flex justify-between items-center">
              Subscribe to our newsletter
            </p>
            <p className="text-[#B8CADB] font-normal  text-[16px] lg:text-[16px]">
              A monthly digest of the latest news, articles, and resources.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <Input
                autoComplete="off"
                name="email"
                type="email"
                placeholder="John@example.com"
                className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#1018280D] w-[23rem]"
              />
            </div>
            <div>
              <button className="bg-custom-blue rounded-sm font-medium text-white mx-auto px-4 py-2 text-[14px] mt-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-t-[#FAFAFA]/[12%] mt-[1.5rem]"></div>
        <div className="lg:flex mt-12 gap-[5rem] ">
          <div>
            <img
              src="../../public/assets/landingPageAssets/powerlabLogo.svg"
              alt="Powerlab logo"
            />
          </div>
          <div className="flex gap-[10rem]">
            <div>
              <p className="text-[#FFFFFFA3] text-[14px] font-semibold">
                COMPANY
              </p>
              <ul className="text-white text-[16px] font-normal mt-4 flex flex-col gap-2">
                <li>Who we are</li>
                <li>Our mission</li>
                <li>Article and research</li>
                <li></li>
              </ul>
            </div>
            <div>
              <p className="text-[#FFFFFFA3] text-[14px] font-semibold">
                PRODUCTS
              </p>
              <ul className="text-white text-[16px] font-normal mt-4 flex flex-col gap-2">
                <li className="mb-4">Pai</li>
                <l className="text-[#FFFFFFA3] text-[14px] font-semibold">
                  SUPPORT
                </l>
                <li className="mt-4">Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-[#FFFFFFA3] text-[14px] font-semibold">
                SOCIAL
              </p>
              <ul className="text-white text-[16px] font-normal mt-4 flex flex-col gap-2">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between  text-[#B8CADB] font-normal  text-[16px] lg:text-[16px] mb-12 mt-12 border-t border-t-[#FAFAFA]/[12%]">
          <div className="mt-[3rem]">
            <p>
              &copy; {new Date().getFullYear()} PowerLabs Technologies, Inc. All
              rights reserved.
            </p>
          </div>
          <div className="flex gap-4 mt-[3rem]">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
