import React from "react";

const MarketingSeo = () => {
  return (
    <div className="bg-marketingSeo bg-no-repeat bg-cover bg-center min-h-screen overflow-hidden flex items-center justify-center relative py-[50px]">
      <span className="bg-bottomBlackShadow absolute bottom-0 w-full h-[120px]"></span>
      <span className="bg-bottomBlackShadow absolute top-0 w-full h-[120px] rotate-180 mt-[-1px]"></span>
      <div className="rotate-3">
        <h2 className="text-neutralWhite font-clash-display-semibold font-semibold text-4xl xsm:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-nowrap xl:leading-134 online_marketing_seo">
          Online Marketing <span className="text_stroke ms-5">SEO</span>
        </h2>
        <h2 className="text-neutralWhite font-clash-display-semibold font-semibold text-4xl xsm:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-nowrap xl:leading-134 mt-3 xl:mt-10 off_page_optimization">
          Off-page <span className="text_stroke">optimization</span>
        </h2>
      </div>
    </div>
  );
};

export default MarketingSeo;
