import About from "./components/about";
import Bio from "./components/bio";
import Contact from "./components/contact";
import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between w-full align-middle px-24   pt-24">
      <div className=" flex  flex-col items-center justify-between">
        <Intro />
        <SectionDivider />
        <About />
        <Bio />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
