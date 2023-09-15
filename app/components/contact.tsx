"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <motion.section
      className="mb-20  text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:farhannazir2660@gmail.com" className="underline">
          farhannazir2660@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 flex items-center justify-center gap-2 h-[3rem] w-[8rem]  bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
