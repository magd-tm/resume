"use client";
import React from "react";

export default function Introduction() {
  const scrollToNextSection = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="relative">
      <div className="h-[80vh] mx-3 px-5 ">
        {/* Content - same for both layouts */}
        <div className="max-w-lg">
          <h1 className="text-5xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#325d7c] to-[#041725] bg-clip-text text-transparent">
              Mechanical Engineer
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 text-gray-600">
            🚀 Aspiring Aerospace
          </h2> 
          <p className="mt-5 leading-relaxed text-sm sm:text-lg text-[#041725]">
            Graduate engineer specializing in <strong>thermal-fluid systems</strong> and <strong>propulsion</strong>, with hands-on <strong>CAD</strong>, <strong>HVAC</strong>, and <strong>additive manufacturing</strong> experience. Passionate about applying expertise to aerospace challenges in <strong>thermal management</strong>, <strong>propulsion systems</strong>, and <strong>advanced manufacturing</strong>.
          </p>
        </div>

        {/* Mobile buttons - full width stacked */}
        <div className="sm:hidden mt-5 flex flex-col gap-3 w-full">
          <a
            href="#experience"
            className="w-full px-5 py-3 flex justify-center font-semibold text-md items-center gap-1 bg-gradient-to-r from-[#325d7c] to-[#041725] text-[#fafafa] rounded-md hover:bg-[#354a53] hover:shadow-lg hover:shadow-[#354a53]/20 hover:scale-[1.02] transition-all duration-200 active:scale-95"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="w-full px-5 py-3 flex justify-center font-semibold text-md items-center gap-1 border-2 border-gradient-to-r from-[#325d7c] to-[#041725] text-[#253237] rounded-md hover:bg-[#253237]/5 hover:shadow-lg hover:shadow-[#253237]/10 hover:scale-[1.02] hover:border-[#354a53] hover:text-[#354a53] transition-all duration-200 active:scale-95"
          >
            Projects
          </a>
        </div>

        {/* Desktop buttons - horizontal */}
        <div className="hidden sm:flex mt-5 justify-start gap-3">
          <a
            href="#experience"
            className="px-5 py-2 flex font-semibold text-md items-center gap-1 bg-gradient-to-r from-[#325d7c] to-[#041725] text-[#E0FBFC] rounded-md hover:bg-[#354a53] hover:shadow-lg hover:shadow-[#354a53]/20 hover:scale-[1.02] transition-all duration-200 active:scale-95"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="px-5 py-2 flex font-bold text-md items-center gap-1 border-2 border-gradient-to-r from-[#325d7c] to-[#041725] text-[#253237] rounded-md hover:bg-[#253237]/5 hover:shadow-lg hover:shadow-[#253237]/10 hover:scale-[1.02] hover:border-[#354a53] hover:text-[#354a53] transition-all duration-200 active:scale-95"
          >
            Projects
          </a>
        </div>
        <div className="absolute bottom-16 left-0 right-0 flex justify-center">
          {" "}
          {/* 3. Added pb-4 for mobile */}
          <button
            onClick={scrollToNextSection}
            className="p-2 rounded-xl cursor-pointer border-2 border-[#5C6B73] hover:bg-[#253237]/5 hover:shadow-lg hover:shadow-[#253237]/10 hover:scale-[1.02] hover:border-[#354a53] hover:text-[#354a53] transition-all duration-300 active:scale-95 animate-bounce"
            aria-label="Scroll to next section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-7 text-[#253237]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
