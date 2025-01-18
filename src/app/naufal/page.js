// pages/index.js
import '../../styles/global.css';
import Hero from "./section/Hero";
import Personal from "./section/Personal";
import TechnicalSkills from "./section/TechnicalSkills";
import Works from "./section/Works";
import ProfessionalExperience from "./section/ProfessionalExperience";
import Navbar from "./section/Navbar";
import Footer from "./section/Footer"


export default function Home() {
  return (
    <div className="relative gap-y-20 min-h-screen grid grid-cols-1 bg-[#1E1E1E] place-items-center">
      <Navbar />
      <Hero />
      <Personal />
      <TechnicalSkills />
      <Works />
      <ProfessionalExperience />
      <Footer />
    </div>
  );
}
