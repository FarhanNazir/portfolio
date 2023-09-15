"use client";
import { motion } from "framer-motion";
import React from "react";
import { skillsData } from "../lib/data";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => {
    return { opacity: 1, y: 0, transition: { delay: 0.05 * index } };
  },
};

export default function Skills() {
  return (
    <motion.section
      className="mb-20  text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800 max-w-2xl">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-yellow-400 border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
