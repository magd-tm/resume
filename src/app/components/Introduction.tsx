

export default function Introduction() {
  return (
    <div className="max-w-max h-[90vh] mx-3 pt-30 px-5 py-10">
      <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Mechanical Engineer</h1>
      <h2 className="text-3xl mt-3 text-gray-600">Aerospace</h2>
      <p className="mt-5 leading-relaxed">Mechanical Engineering Graduate Student focustoned on thermal-fluid systems and propulsion. Hands-on expereince with HVAC design, CAD modeling, and additive manufacturing.
      </p>

      </div>

      <div className="mt-5 mx-auto flex justify-start gap-3 ">
      <button className="px-5 py-2 flex font-semibold text-sm items-center gap-1 bg-gray-600 text-gray-100 rounded-md">
            View Experience
        </button>
        <button className="px-5 py-2 flex font-semibold text-sm items-center gap-1 border-1 border-gray-400 text-gray-800 rounded-md">
            Projects
        </button>
      </div>
    {/* <div className="flex justify-center items-end pt-30">
    <button className="text-white px-4 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-gray-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

      </button>
    </div> */}
    </div>
  )
}
