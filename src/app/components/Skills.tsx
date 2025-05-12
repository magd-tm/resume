import React from "react";

// Type definition for SkillPill props
type SkillPillProps = {
  skill: string;
};

// Reusable Skill Pill Component with TypeScript
const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-300 text-aerospace-800">
      {skill}
    </span>
  );
};

// Type definition for Skills component (though no props are used here)
type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  // Typed skill arrays
  const cadSkills: string[] = ["SolidWorks", "NX", "ANSYS", "Revit", "AutoCAD"];
  const programmingSkills: string[] = ["MATLAB", "Python", "Java", "C++"];
  const manufacturingSkills: string[] = [
    "3D Printing (Resin/FDM)",
    "CNC/router",
    "Mill",
    "Lathe",
    "Welding",
    "Power Tools",
  ];
  const otherSkills: string[] = [
    "GD&T",
    "Electronic Assemblies",
    "PC Building",
    "Bilingual (English/Spanish)",
  ];

  return (
    <section id="skills">
      <div className="mx-auto px-4 sm:px-6 py-8">
        {/* Section Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* CAD & Simulation Card */}
          <div className="p-5 sm:p-6 border-l-4 border-gray-600 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              CAD & Simulation
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {cadSkills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Programming Card */}
          <div className="p-5 sm:p-6 border-l-4 border-gray-600 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Programming
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {programmingSkills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Manufacturing Card */}
          <div className="p-5 sm:p-6 border-l-4 border-gray-600 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Manufacturing
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {manufacturingSkills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Other Card */}
          <div className="p-5 sm:p-6 border-l-4 border-gray-600 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Other
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {otherSkills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
