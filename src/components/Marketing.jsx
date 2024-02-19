"use client";
import React, { useEffect } from "react";
import { workingWithCompaniesList } from "./common/Helper";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Marketing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "0% 0%",
        end: "100% 0%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "0% 0%",
        end: "100% 0%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    tl1.fromTo(".section1", { opacity: 1 }, { opacity: 0 });
    tl2.fromTo(".section2", { opacity: 1 }, { opacity: 0 });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0d1010] section1 flex justify-center flex-col gap-[20px] sm:gap-[70px] md:gap-[100px] lg:gap-[120px] xl:gap-[160px] container mx-auto xl:max-w-[1140px] px-3 py-[50px]">
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
      <div className="min-h-screen bg-[#0d1010] section2 flex justify-center flex-col gap-[20px] sm:gap-[70px] md:gap-[100px] lg:gap-[120px] xl:gap-[160px] container mx-auto xl:max-w-[1140px] px-3 py-[50px]">
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
              <Link href={value.link} target="_blank" key={index}>
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
