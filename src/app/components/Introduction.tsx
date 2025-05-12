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
    <div className="bg-white relative">
      <div className="h-[80vh] mx-3 px-5 py-10 ">
        {/* Content - same for both layouts */}
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Mechanical Engineer
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 text-gray-600">
            Aerospace
          </h2>
          <p className="mt-5 leading-relaxed text-mg sm:text-lg ">
            Mechanical Engineering Graduate Student focused on thermal-fluid
            systems and propulsion. Hands-on experience with HVAC design, CAD
            modeling, and additive manufacturing.
          </p>
        </div>

        {/* Mobile buttons - full width stacked */}
        <div className="sm:hidden mt-5 flex flex-col gap-3 w-full">
          <a
            href="#experience"
            className="w-full px-5 py-3 flex justify-center font-semibold text-md items-center gap-1 bg-gray-600 text-gray-100 rounded-md"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="w-full px-5 py-3 flex justify-center font-semibold text-md items-center gap-1 border border-gray-400 text-gray-800 rounded-md"
          >
            Projects
          </a>
        </div>

        {/* Desktop buttons - horizontal */}
        <div className="hidden sm:flex mt-5 justify-start gap-3">
          <a
            href="#experience"
            className="px-5 py-2 flex font-semibold text-md items-center gap-1 bg-gray-600 text-gray-100 rounded-md"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="px-5 py-2 flex font-semibold text-md items-center gap-1 border border-gray-400 text-gray-800 rounded-md"
          >
            Projects
          </a>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {" "}
          {/* 3. Added pb-4 for mobile */}
          <button
            onClick={scrollToNextSection}
            className="p-2 rounded-lg cursor-pointer transition-colors focus:outline-none"
            aria-label="Scroll to next section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-7 animate-bounce text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
