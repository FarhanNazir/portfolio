"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { BiSolidRightArrow, BiSolidDownload } from "react-icons/bi";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionView } from "../lib/hooks";

export default function Intro() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section className=" max-w-xl text-center  scroll-mt-[100rem]">
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
        className="mb-6 mt-8 px-4  font-medium !leading-[1.5] text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Farhan.</span> I'm, a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I have a
        passion for creating
        <span className="italic"> websites and applications</span>, with a
        strong emphasis on {""}
        <span className="underline underline-offset-[5px]">
          React (Next.js)
        </span>
        .
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="w-44 bg-yellow-500  justify-center font-semibold text-black  py-2 px-4 flex items-center gap-2 rounded-md outline-none focus:scale-110 hover:scale-110 hover:bg-yellow-600 active:scale-105 transition"
        >
          Contact
          <BiSolidRightArrow className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="w-44 group justify-center font-semibold  text-black bg-white  py-2 px-4 flex items-center gap-2 rounded-md utline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border-black/10 hover:text-gray-950"
        >
          Download CV{" "}
          <BiSolidDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
      </motion.div>
    </section>
  );
}
