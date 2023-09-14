"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionView } from "../lib/hooks";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Intro() {
  const { ref } = useSectionView("Home", 1);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="https://static.wikia.nocookie.net/kong/images/6/60/2-D_Phase_2_.jpg/revision/latest?cb=20221119163101"
            alt="2d"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-yellow-400 shadow-xl"
          ></Image>
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-md font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Farhan.</span> I'm, a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I have a
        passion for creating
        <span className="italic"> websites and applications</span>, with a
        strong emphasis on{""}
        <span className="underline"> React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white py-2 px-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white  py-2 px-4 flex items-center gap-2 rounded-full utline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border-black/10 hover:text-gray-950"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-white  p-[12px] text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition  border-black/10 hover:text-gray-950"
        >
          <BsLinkedin className="h-[16px] w-[16px]" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="bg-white  p-[10px] text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer border-black/10 hover:text-gray-950"
        >
          <FaGithubSquare className="h-[20px] w-[20px]" />
        </a>
      </motion.div>
    </section>
  );
}
