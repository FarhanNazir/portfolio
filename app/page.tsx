import Image from "next/image";
import About from "./components/about";
import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between w-full align-middle sm:px-24 px-10  pt-24">
      <div className="max-w-xl flex  flex-col items-center justify-between">
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
      </div>
    </main>
  );
}
