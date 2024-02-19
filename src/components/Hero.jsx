"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const showAnimation = gsap.timeline({
      duration: 2,
      delay: -1,
    });

    // Animation for displaying BCoin icons
    showAnimation.fromTo(
      ".heading",
      {
        stagger: 1,
        yPercent: 100,
      },
      { yPercent: 0, opacity: 1 }
    );

    // Animation for blinking text
    showAnimation
      .fromTo(
        ".left-knifes",
        {
          yPercent: -200,
          xPercent: -200,
        },
        { yPercent: 0, xPercent: 0, opacity: 1 }
      )
      .fromTo(
        ".right-knifes",
        {
          yPercent: -200,
          xPercent: 200,
        },
        { yPercent: 0, xPercent: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        ".middle-knifes",
        {
          yPercent: -200,
        },
        { yPercent: 0, xPercent: 0, opacity: 1 },
        "<"
      );
  }, []);
  return (
    <div className="flex grow items-center justify-center px-3 relative py-[100px] md:pt-0 sm:pb-32">
      <Image
        className="right-[50%] sm:right-1/2 middle-knifes translate-x-1/2 bottom-[-100px] sm:bottom-[-167px] absolute max-w-[45px] z-10 sm:max-w-[75px] knifes opacity-0"
        src="/assets/images/png/knife.png"
        width={75}
        height={245}
        alt="curved knife"
      />
      <Image
        className="left-10 right-knifes sm:left-20 md:left-32 bottom-14 absolute max-w-[100px] sm:max-w-[167px] knifes opacity-0"
        src="/assets/images/png/curved_right_knife.png"
        width={167.85}
        height={114.77}
        alt="curved knife"
      />
      <Image
        className="right-10 left-knifes sm:right-20 md:right-32 bottom-14 absolute max-w-[95px] sm:max-w-[155px] knifes opacity-0"
        src="/assets/images/png/curved_left_knife.png"
        width={167.85}
        height={114.77}
        alt="curved knife"
      />
      <h1 className="heading font-clash-display-semibold opacity-0 font-semibold capitalize bg-headingWhiteGradient sm:!leading-160 bg-clip-text text-4xl xsm:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xxl text-transparent">
        Rahkley{" "}
        <span className="bg-headingBlackGradient bg-clip-text text-transparent">
          Agency
        </span>
      </h1>
    </div>
  );
};

export default Hero;
