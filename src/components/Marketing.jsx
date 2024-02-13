import React from "react";
import { workingWithCompaniesList } from "./common/Helper";
import Image from "next/image";
import Link from "next/link";

const Marketing = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center flex-col gap-[20px] sm:gap-[70px] md:gap-[100px] lg:gap-[120px] xl:gap-[160px] container mx-auto xl:max-w-[1140px] px-3">
        <h2 className="max-w-[250px] text-center mx-auto sm:ms-0 sm:text-start md:max-w-[320px] text-4xl sm:text-5xl md:text-6xl font-semibold font-clash-display-semibold bg-headingWhiteGradient bg-clip-text text-transparent md:!leading-67">
          Online Marketing
        </h2>
        <div className="flex justify-end">
          <p className="text-base text-center sm:text-start sm:max-w-[260px] text-neutralWhite font-normal font-clash-display-regular opacity-80">
            Lorem ipsum dolor sit amet consectetur. Vestibulum tempor diam ante
            quisque at ut. Nullam porta adipiscing elit ac ridiculus. Quam justo
            fusce pharetra est purus faucibus tell
          </p>
        </div>
      </div>
      <div className="min-h-screen flex justify-center flex-col gap-[20px] sm:gap-[70px] md:gap-[100px] lg:gap-[120px] xl:gap-[160px] container mx-auto xl:max-w-[1140px] px-3">
        <div className="flex items-center sm:items-end flex-col">
          <div className="text-center sm:text-start">
            <p className="font-normal font-plus-jakarta text-base opacity-70 text-neutralWhite tracking-[1.68px]">
              02/ Partners
            </p>
            <h2 className="max-w-[250px] md:max-w-[320px] text-4xl sm:text-5xl md:text-6xl font-semibold font-clash-display-semibold bg-headingWhiteGradient bg-clip-text text-transparent md:!leading-67">
              We are Working with
            </h2>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <div className="max-w-[380px] flex justify-center sm:justify-start flex-wrap gap-[29px]">
            {workingWithCompaniesList.map((value, index) => (
              <Link href="" key={index}>
                <Image
                  className={`max-w-[${value.width}px]`}
                  src={value.image}
                  alt={value.alternative}
                  width={value.width}
                  height={value.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
