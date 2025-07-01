import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import InitialLanding from "./components/InitialLanding";
import Navbar from "./../../components/Navbar";

export default function Home() {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0 !cursor-none">
      <Navbar />
      <div className="">
        <InitialLanding />
      </div>

      <div className="w-full flex justify-center mt-12">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-12">
        <Education />
      </div>

      <div className="w-full flex justify-center mt-12" id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
