import Connect from "./components/Connect";
import ContactInfo from "./components/ContactInfo";
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

    <div>
      <NavBar/>
      <Introduction/>
      <div className="">
        <Experience/>
        <Projects/>
        <Education/>
        <Skills/>
        <ContactMe/>
      </div>
      <FooterRights/>
    </div>
  );
}
