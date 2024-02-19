"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { sendMessageFields } from "./common/Helper";

const Project = () => {
  const [formVisible, setFromVisible] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setFromVisible(false);
  };
  const messageHandler = () => {
    setFromVisible(true);
  };
  useEffect(() => {
    if (formVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [formVisible]);

  return (
    <>
      <div className="bg-project bg-no-repeat bg-cover bg-right relative">
        <div className="container mx-auto xl:max-w-[1140px]">
          <div className="flex items-center flex-col md:flex-row md:pt-0 pt-10">
            <div className="md:max-w-[400px] lg:max-w-[582px] md:pt-[147px] pb-6 sm:pb-10 md:pb-[120px] lg:pb-[170px] xl:pb-[220px] text-center md:text-start px-3">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold font-clash-display-semibold xl:leading-[108px] text-neutralWhite stroke stroke-neutralWhite">
                Have a <span className="text_stroke">project </span>in mind?
              </h2>
              <button
                onClick={messageHandler}
                className="text-neutralWhite mt-[28px] text-base font-semibold font-plus-jakarta opacity-80 py-3 px-6 border-white border-2 hover:bg-white hover:text-black duration-300"
              >
                Let’s Discuss
              </button>
            </div>
            <div className="max-w-full md:max-w-[410px] lg:max-w-[550px] xl:max-w-[600px] w-full bg-[#1C1A1C] md:absolute right-0 top-0 flex items-center justify-center">
              <Image
                className="max-w-[250px] sm:max-w-[324px] md:max-w-[297px] lg:max-w-[386px] xl:max-w-[434px] w-full"
                width={434.11}
                height={772}
                src="/assets/gif/basketball-gif.gif"
                alt="basketball spinning"
              />
            </div>
          </div>
        </div>
      </div>
      {formVisible && (
        <>
          <span
            className="fixed w-full h-full top-0 left-0 z-20"
            onClick={() => setFromVisible(false)}
          ></span>
          <div className="fixed z-30 top-1/2 left-1/2 sm:max-w-[580px] md:max-w-[765px] w-full -translate-x-1/2 -translate-y-1/2 px-3">
            <form
              onSubmit={submitHandler}
              className="backdrop-blur-xl bg-reviewCard py-8 sm:py-[74px] px-5 sm:px-[35px] rounded-[20px] bg-no-repeat bg-cover border border-white bg-[rgba(255,_253,_255,_0.12)]"
            >
              {sendMessageFields.map((value, index) => (
                <div
                  className={`flex items-start sm:items-end gap-1 sm:gap-3 flex-col sm:flex-row ${
                    index === 0 ? "pt-0" : "pt-5 sm:pt-[43px]"
                  }`}
                  key={index}
                >
                  <label
                    htmlFor={value.id}
                    className={`font-semibold text-neutralWhite font-clash-display-semibold text-lg sm:text-xl md:text-2xl leading-[22px] ${
                      index === 0 && "max-w-[90px] sm:max-w-[120px] w-full"
                    }`}
                  >
                    {value.label}
                  </label>
                  <input
                    type={value.type}
                    id={value.id}
                    className="border-b border-neutralWhite w-full bg-transparent text-white focus:outline-none text-xl pb-1"
                  />
                </div>
              ))}
              <button
                onClick={() => setFromVisible(false)}
                type="submit"
                className="font-plus-jakarta font-semibold text-sm sm:text-base text-neutralWhite opacity-80 hover:opacity-100 duration-300 py-3 px-[43px] mt-8 sm:mt-[54px] bg-orangeButton"
              >
                Send Message
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Project;
