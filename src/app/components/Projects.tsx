export default function Projects() {
  return (
    <section id="projects">
      <div className="px-4 sm:px-6">
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl font-bold text-[#041725]">Projects</h1>
          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-[#EEF6FF] border-t-4 border-t-[#041725] border-[#041725] rounded-lg shadow-md  ">
            <h2 className="text-xl sm:text-2xl font-bold text-[#041725]">
            🛰️ Lunar Dust Filtration System
            </h2>
            <h2 className="text-md sm:text-lg font-bold text-[#42535f]">NASA MINDS 2025 Competition</h2>
            <div className="max-w-3xl m-2 text-[#041725]">
              <div className="px-1 py-1 text-xs mb-3 bg-[#ADD3FF] rounded-xl w-20 flex justify-center font-bold">
                2nd Place
              </div>
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                Designed and manufactured a lunar dust filtration system for NASA’s Artemis missions.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                As Manufacturing Lead, directed CAD development in SolidWorks, selected materials, implemented DFM/DFA best practices, and led a sub-team through prototyping and fabrication phases.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-[#EEF6FF] border-t-4 border-t-[#041725] border-[#041725] rounded-lg shadow-md  ">
            <h2 className="text-xl sm:text-2xl font-bold text-[#041725]">
            🦿 Lower-limb Exoskeleton:
            </h2>
            <h2 className="text-md sm:text-lg font-bold text-[#42535f]">Senior Capstone Project</h2>
            <div className="max-w-3xl m-2 text-[#041725]">
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                Designed and manufactured a lower-limb exoskeleton for paratroopers, reducing knee joint torque upon impact by 20%.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                Assembled and calibrated an EMG muscle sensor to record muscle oscillations during testing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
