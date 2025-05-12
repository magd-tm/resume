export default function Experience() {
  return (
    <section id="experience">
      <div className="px-4 sm:px-6">
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Professional Experience
          </h1>

          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-gray-50 border-l-4 border-gray-600 rounded-lg shadow-sm hover:bg-gray-100">
            {/* Job Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
              Mechanical Designer
            </h2>

            {/* Company */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-500 mt-1">
              Trek Consulting Inc.
            </h3>

            {/* Responsibilities */}
            <div className="mt-3 sm:mt-4">
              <h4 className="text-base sm:text-lg font-medium text-gray-800">
                Responsibilities:
              </h4>
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  Designed HVAC and plumbing systems for commercial and
                  healthcare facilities, including Disneyland and Kaiser
                  Permanente
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Coordinated cross-disciplinary teams and maintained
                  communication with architects, structural engineers, and
                  contractors throughout design and construction
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Managed project deliveries, reviewed submittals, responded to
                  RFIs, and conducted onsite inspections ensuring compliance
                  with local codes and project specifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
