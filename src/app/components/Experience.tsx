export default function Experience() {
  return (
    <section id="experience">
      <div className="px-4 sm:px-6">
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl font-bold text-[#041725]">
            Professional Experience
          </h1>

          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-[#EEF6FF] border-l-4 border-[#041725] rounded-lg shadow-sm">
            {/* Job Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#041725]">
            🔧 Mechanical Designer
            </h2>

            {/* Company */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#274859] mt-1">
              Trek Consulting Inc.
            </h3>

            {/* Responsibilities */}
            <div className="mt-3 sm:mt-4">
              <h4 className="text-base sm:text-lg font-medium text-[#041725]">
                Responsibilities:
              </h4>
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                Designed HVAC and plumbing systems for commercial and healthcare projects, including high-profile clients such as Disneyland and Kaiser Permanente
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                Collaborated with architects, structural engineers, and contractors to ensure cohesive multidisciplinary coordination throughout design and construction phases
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                Oversaw project deliverables, reviewed submittals, responded to RFIs, and performed onsite inspections to ensure code compliance and adherence to project specifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
