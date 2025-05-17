import React from "react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/20 border-b shadow-sm border-gray-200 w-full">
      {/* Main container */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 sm:px-6 sm:py-3 gap-2">
        {/* Name/Title */}
        <div className="text-left">
          <h1 className="text-base sm:text-xl font-bold text-[#041725]">
            Magdiel Ronces
          </h1>
          <h2 className="text-xs sm:text-base text-[#142C3E] mt-1">
            Mechanical Engineer
          </h2>
        </div>

        {/* Buttons (shared across all screen sizes now) */}
        <div className="flex gap-2 flex-wrap">
          <a
            href="#contactme"
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[rgb(149,205,245)] to-[#64b2ea] hover:bg-[#f8fbfe] text-[##041725] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-md transition duration-300 cursor-pointer"
          >
            <EnvelopeIcon />
            <span>Contact</span>
          </a>
          <a
            href="https://linkedin.com/in/magdiel-ronces-95860726b"
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#325d7c] to-[#041725] hover:bg-[#3D4A61] text-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-md transition duration-300 cursor-pointer"
          >
            <DocumentIcon />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 50 50"
      fill="currentColor"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
      />
    </svg>
  );
}
