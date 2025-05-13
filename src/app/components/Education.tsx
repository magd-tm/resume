export default function Education() {
  return (
    <section id="education">
      <div className="px-4 sm:px-6">
        {/* Section Header with Adjusted Top Margin */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6 sm:mt-10 mb-4 sm:mb-6">
          Education
        </h1>

        {/* Education Card with Precise Spacing */}
        <div className="bg-[#EEF6FF] border-l-4 border-[#041725] rounded-lg shadow-sm overflow-hidden">
          {/* University Header with Tight Padding */}
          <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#041725] leading-tight">
                California State University Long Beach
              </h2>
            </div>
          </div>

          {/* Degree Details with Balanced Spacing */}
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-3">
            {/* Masters Degree */}
            <div className="flex flex-col sm:flex-row justify-between pt-2 border-t border-gray-200">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#041725]">
                  Master&apos;s in Mechanical Engineering
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-gray-500 mt-1">
                  Focus in Fluid and Thermal Sciences
                </h4>
              </div>
              <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0 sm:pl-4 whitespace-nowrap">
                Aug 2023 - May 2026
              </div>
            </div>

            {/* Bachelors Degree */}
            <div className="flex flex-col sm:flex-row justify-between pt-3 border-t border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-[#041725]">
                Bachelor&apos;s in Mechanical Engineering
              </h3>
              <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0 sm:pl-4 whitespace-nowrap">
                Aug 2019 - May 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
