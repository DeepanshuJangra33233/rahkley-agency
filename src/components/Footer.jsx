import Link from "next/link";
import { footerIcons } from "./common/Helper";
import { Logo } from "./common/Icons";

const Footer = () => {
  // GET LATEST YEAR
  const latestYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-between container mx-auto xl:max-w-[1140px] px-3 pt-[40px] flex-col md:flex-row">
      <div className="flex gap-[18px] items-center order-2 md:order-1 mt-3 md:mt-0">
        {footerIcons.map((value, index) => (
          <Link
            href={value.link}
            key={index}
            target="_blank"
            className="hover:-translate-y-1 duration-300"
          >
            {value.icon}
          </Link>
        ))}
      </div>
      <div className="mb-[11px] flex flex-col justify-center gap-[18px] order-1 md:order-2">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-sm font-normal opacity-80 text-neutralWhite font-manrope">
          Copyright@{latestYear} | All Rights Reserved
        </p>
      </div>
      <div className="flex md:flex-col items-start order-3 flex-row mt-3 md:mt-0 mb-3 md:mb-0">
        <button className="font-manrope text-base font-normal text-neutralWhite opacity-80 me-3 md:me-0 md:mb-1 after:content-[''] after:bg-white after:absolute relative after:w-0 hover:after:w-full after:duration-300 after:h-[1px] after:left-0 after:bottom-[-1px]">
          Terms of Service
        </button>
        <button className="font-manrope text-base font-normal text-neutralWhite opacity-80 after:content-[''] after:bg-white after:absolute relative after:w-0 hover:after:w-full after:duration-300 after:h-[1px] after:left-0 after:bottom-[-1px]">
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default Footer;
