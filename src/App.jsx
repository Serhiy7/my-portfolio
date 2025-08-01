import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { LanguageSkills } from "./components/LanguageSkills/LanguageSkills";
// …и остальные

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <LanguageSkills />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}
