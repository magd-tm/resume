import React from 'react'

export default function NavBar() {
  return (
    <div className="w-full h-15 flex justify-between items-center border-b border-b-gray-300 shadow-sm
    ">
    <div className="m-8">
        <h1 className="text-gray-700 font-bold text-xl">Magdiel Ronces</h1>
        <h2 className="text-gray-600 text-sm">Mechanical Engineer</h2>
    </div>
    <div className="flex gap-3 text-xs text-gray-200 m-4 items-center">
    {/* <button className="px-1 py-1 flex items-center gap-1 bg-gray-600 rounded-md">
      <Image src={Logo}
      className='object-contain filter brightness-0 invert'
        width={27}
        height={27}
        alt="LinkedIn Link"
        />
      </button> */}
        <button className="px-4 py-2 flex items-center gap-1 bg-gray-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
            <span>Contact</span>
        </button>
        <button className="px-4 py-2 flex items-center gap-1 bg-gray-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
            Resume
        </button>
    </div>
  </div>
  )
}
