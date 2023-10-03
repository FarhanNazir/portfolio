"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionView } from "../lib/hooks";

export default function About() {
  return (
    <motion.section
      className="  text-center leading-8  mb-14 sm:max-w-3xl mt-12 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Profile</SectionHeading>

      <p className="mb-3 max-w-3xl ">
        I am an enthusiastic individual with a solid academic foundation,
        holding a Bachelor's degree in Mathematical Science and a Master of
        Science (Computational and Theoretical Sciences). My educational journey
        has equipped me with a profound understanding of intricate mathematical
        concepts and their practical applications in the field of computational
        and theoretical sciences. Moreover, I have honed my skills in web
        development and am proficient in React (Next.js), allowing me to create
        seamless and interactive user experiences.
      </p>

      <p className="max-w-3xl">
        My passion lies in exploring the intersections of mathematics,
        technology, and programming. I find joy in solving complex problems by
        leveraging my expertise in mathematical modeling, data analysis, and
        algorithm development. With a keen eye for detail and a knack for
        creativity, I thrive on translating abstract ideas into tangible,
        user-friendly applications. I am driven by a relentless curiosity, and I
        am constantly seeking opportunities to integrate my mathematical
        expertise with development technologies like React (Next.js). My goal is
        to contribute innovatively to the ever-evolving landscape of
        computational sciences and software development, creating solutions that
        are not only functional but also aesthetically engaging and
        user-focused.
      </p>
    </motion.section>
  );
}
