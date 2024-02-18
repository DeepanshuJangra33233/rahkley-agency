"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { blogList } from "./common/Helper";
import { WhiteRightArrow } from "./common/Icons";
const Blog = () => {
  return (
    <div className="bg-blog bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center md:justify-start flex-col-reverse md:flex-row relative py-[50px]">
      <span className="bg-bottomBlackShadow absolute bottom-0 w-full h-[120px]"></span>
      <span className="bg-bottomBlackShadow absolute top-0 w-full h-[120px] rotate-180 mt-[-1px]"></span>
      <div className="max-w-[300px] xsm:max-w-[545px] sm:max-w-[80%] md:max-w-[60%]">
        <Swiper
          loop={true}
          dir="rtl"
          spaceBetween={16}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 2.6,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2.6,
              spaceBetween: 16,
            },
          }}
        >
          {blogList.map((value, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="mt-5 w-full hover:translate-y-[-5px] duration-300"
              >
                <div className="bg-[rgba(11,_2,_24,_0.20)]">
                  <Image
                    className="w-full"
                    width={331.377}
                    height={233.483}
                    src={value.image}
                    alt="blog-banner"
                  />
                  <div className="py-[14px] px-3 flex flex-col items-end">
                    <h3 className="text-2xl font-clash-display-semibold text-end bg-headingWhiteGradient bg-clip-text text-transparent font-semibold max-w-[300px]">
                      {value.title}
                    </h3>
                    <button className="text-2xl font-clash-display-semibold bg-headingWhiteGradient bg-clip-text text-transparent font-semibold mt-[38px] flex items-center">
                      <span className="me-[9px]">
                        <WhiteRightArrow />
                      </span>
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="ps-5 md:ps-9 lg:ps-11 xl:ps-[53px] text-center md:text-start mb-5 md:mb-0">
        <p className="opacity-70 text-base font-normal font-plus-jakarta text-neutralWhite leading-6">
          04/ Why us
        </p>
        <h2 className="max-w-full md:max-w-[300px] xl:max-w-[404.471px] font-semibold font-clash-display-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xxl xl:!leading-[94.6px] text-neutralWhite">
          Latest News & Blogs
        </h2>
        <button
          className="text-neutralWhite text-base font-semibold font-plus-jakarta opacity-80 py-3 px-6 border-white border-2 mt-[30px] hover:bg-white
           hover:text-black duration-300"
        >
          Read All
        </button>
      </div>
    </div>
  );
};

export default Blog;
