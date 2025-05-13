export default function FooterRights() {
  return (
    <footer className="">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#top"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="grid grid-cols-1 gap-1">
              <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-100">
                Magdiel Ronces
              </span>
              <span className="self-center text-md whitespace-nowrap font-semibold text-gray-200">
                Mechanical Engineer
              </span>
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 ">
            <li>
              <a href="#experience" className="hover:underline me-4 md:me-6">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:underline me-4 md:me-6">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-100 sm:text-center ">
          © 2025 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
