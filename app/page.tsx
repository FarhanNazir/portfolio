import About from "./components/about";
import Bio from "./components/bio";
import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between w-full align-middle sm:px-24 px-10  pt-24">
      <div className=" flex  flex-col items-center justify-between">
        <Intro />
        <SectionDivider />
        <About />
        <Bio />
        <Skills />
      </div>
    </main>
  );
}
