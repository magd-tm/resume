export default function Projects() {
  return (
    <div className="">
    <div className="mt-8 m-3">
      <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      <div className="block w-full mt-3 p-6 bg-gray-100 border-t-4 border-t-gray-600 border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
        <h2 className="text-xl font-bold text-gray-800">NASA MINDS 2025 Competition</h2>
        <div className="max-w-3xl m-2">
        <div className="px-1 py-1 text-xs mb-3 bg-gray-300 rounded-xl w-20 flex justify-center font-bold">2nd Place</div>
        <ul className="list-disc ml-8">
          <li>Designed and manufactured a lunar dust filtration system for the Artemis missions.</li>
          <li>As the manufacturing lead I was responsible for heading the CAD design in SolidWorks, materials selection, DFM/DFA processes, and managing a sub-team.</li>
        </ul>
        </div>
      </div>
      <div className="block w-full mt-3 p-6 bg-gray-100 border-t-4 border-t-gray-600 border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
        <h2 className="text-xl font-bold text-gray-800">Lower-limb Exoskeleton:</h2>
        <div className="max-w-3xl m-2">
      
        <ul className="list-disc ml-8">
          <li>Designed and manufactured a lower-limb exosekleton for paratroopers, reducing torque about the knee at impact by 20%</li>
          <li>Assembled a working EMG muscle sensor to record muscle oscillations</li>
        </ul>
        </div>
      </div>
    </div>
    
    <div>
    </div>
  </div>
  )
}
