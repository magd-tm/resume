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
            <span>Resume</span>
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
          <span>Resume</span>
        </button>
      </div>
    </header>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="h-4 w-4"
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
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}
