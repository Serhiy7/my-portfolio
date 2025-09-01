import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { LanguageSkills } from "./components/LanguageSkills/LanguageSkills";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Highlights } from "./components/Highlights/Highlights";
import { Contact } from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <LanguageSkills />
      <Experience />
      <Projects />
      <Highlights variant="solid" />
      <Contact />
    </>
  );
}
