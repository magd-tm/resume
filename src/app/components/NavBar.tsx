import React from "react";

export default function NavBar() {
  return (
    <header className="min-w-[320px] w-full bg-gray-100 border-b border-gray-200 ">
      {/* Main container */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:px-6 sm:py-4 gap-3">
        {/* Name/Title - Left side */}
        <div className="text-center sm:text-left">
          <h1 className="text-[clamp(1.25rem,5vw,1.75rem)] font-bold text-gray-800">
            Magdiel Ronces
          </h1>
          <h2 className="text-[clamp(0.875rem,3vw,1.125rem)] text-gray-600 mt-1">
            Mechanical Engineer
          </h2>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <div className="hidden sm:flex gap-3">
          <a
            href="#contactme"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-md  cursor-pointer"
          >
            <EnvelopeIcon />
            <span>Contact</span>
          </a>
          <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer text-md">
            <DocumentIcon />
            <span>Connect</span>
          </button>
        </div>
      </div>

      {/* Mobile buttons - shown only on mobile */}
      <div className="flex sm:hidden justify-between gap-2 mx-3 mb-3">
        <a
          href="#contactme"
          className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md w-full text-sm"
        >
          <EnvelopeIcon />
          <span>Contact</span>
        </a>
        <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md w-full text-sm">
          <DocumentIcon />
          <span>Connect</span>
        </button>
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
      className="h-6 w-6"  // Match the same dimensions as EnvelopeIcon
      viewBox="0 0 50 50"
      fill="currentColor"   // Match the fill behavior
      stroke="currentColor" // Match the stroke behavior
    >
      <path
        strokeLinecap="round"  // Consistent stroke properties
        strokeLinejoin="round"
        strokeWidth={0.5}      // Adjusted for better visibility at small size
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
      />
    </svg>
  );
}