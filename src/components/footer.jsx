export default function Footer() {
  return (
    <div className="px-4 lg:px-20">
      <div className=" border-t border-t-[#FAFAFA]/[12%] pt-8 pb-12 flex flex-col gap-8 lg:justify-between lg:flex-row-reverse lg:pb-16 opacity-[64%]">
        <div className="flex gap-4">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} PowerLabs Technologies, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
