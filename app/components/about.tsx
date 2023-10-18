"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

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
        I'm a passionate individual with a strong background in Mathematical
        Science (Bachelor's degree) and Computational and Theoretical Sciences
        (Master's degree). Skilled in React (Next.js) and web development, I
        excel at creating interactive user experiences. My expertise lies in
        mathematical modeling, data analysis, and algorithm development. I'm
        driven by curiosity and creativity, aiming to innovate in the
        computational sciences and software development by integrating math and
        technology.
      </p>

      <p className="max-w-3xl">
        My ultimate objective is to make significant and innovative
        contributions to the continually evolving realm of computational
        sciences and software development. I am dedicated to crafting solutions
        that excel not only in flawless functionality but also in visually
        appealing and user-centric designs. Leveraging my distinctive
        combination of mathematical proficiency and technical expertise, I am
        resolute in my commitment to driving forward the field, nurturing
        innovation, and leading advancements in computational sciences and
        software development
      </p>
    </motion.section>
  );
}
