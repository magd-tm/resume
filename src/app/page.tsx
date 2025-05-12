import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FooterRights from "./components/FooterRights";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar - Full width */}
      <div className="bg-white border-b border-gray-200">
        <NavBar />
      </div>

      {/* Introduction - Full-width bg with contained content */}
      <div className="bg-white">
        {" "}
        {/* Optional background color */}
        <div className="mx-auto px-4 sm:px-6 py-12 max-w-4xl">
          <Introduction />
        </div>
      </div>

      {/* Main content container */}
      <main className="flex-1">
        {/* Experience */}
        <div className="bg-white py-8">
          <div className="mx-auto px-2 sm:px-4 max-w-4xl">
            <Experience />
          </div>
        </div>

        {/* Projects - Alternate background */}
        <div className="bg-gray-50 py-8">
          <div className="mx-auto px-2 sm:px-4 max-w-4xl rounded-lg">
            <Projects />
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-50 py-8 rounded-lg">
          <div className="mx-auto px-2 sm:px-4 max-w-4xl">
            <Education />
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-50 py-8 rounded-lg">
          <div className="mx-auto px-2 sm:px-4 max-w-4xl">
            <Skills />
          </div>
        </div>

        {/* Contact - Full width CTA */}
        <div className=" text-white py-8 rounded-lg">
          <div className="mx-auto px-2 sm:px-4 max-w-4xl">
            <ContactMe />
          </div>
        </div>
      </main>

      {/* Footer - Full width */}
      <div className="bg-gray-300 rounded-lg">
        <div className="mx-auto px-2 sm:px-4 py-8">
          <FooterRights />
        </div>
      </div>
    </div>
  );
}
