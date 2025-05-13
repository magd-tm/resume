export default function Projects() {
  return (
    <section id="projects">
      <div className="px-4 sm:px-6">
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl font-bold text-[#041725]">Projects</h1>
          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-[#EEF6FF] border-t-4 border-t-[#041725] border-[#041725] rounded-lg shadow-md  ">
            <h2 className="text-xl sm:text-2xl font-bold text-[#041725]">
              NASA MINDS 2025 Competition
            </h2>
            <div className="max-w-3xl m-2 text-[#041725]">
              <div className="px-1 py-1 text-xs mb-3 bg-[#ADD3FF] rounded-xl w-20 flex justify-center font-bold">
                2nd Place
              </div>
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  Designed and manufactured a lunar dust filtration system for
                  the Artemis missions.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  As the manufacturing lead I was responsible for heading the
                  CAD design in SolidWorks, materials selection, DFM/DFA
                  processes, and managing a sub-team.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 p-5 sm:p-6 bg-[#EEF6FF] border-t-4 border-t-[#041725] border-[#041725] rounded-lg shadow-md  ">
            <h2 className="text-xl sm:text-2xl font-bold text-[#041725]">
              Lower-limb Exoskeleton:
            </h2>
            <div className="max-w-3xl m-2 text-[#041725]">
              <ul className="list-disc ml-5 sm:ml-6 space-y-2 mt-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  Designed and manufactured a lower-limb exosekleton for
                  paratroopers, reducing torque about the knee at impact by 20%
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Assembled a working EMG muscle sensor to record muscle
                  oscillations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
