"use client";

import { motion } from "framer-motion";
import { headerList, links } from "../lib/data";
import Link from "next/link";
import { LiaGripfire } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";
import { BiLogoGithub } from "react-icons/bi";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative flex ">
      <motion.div
        className="fixed top-0 h-[3.5rem] w-full  flex justify-center bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] "
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="fixed  flex   w-full items-center   h-[3.5rem]  max-w-3xl px-4">
          <Link
            href="/"
            className="   flex  justify-start w-1/2  font-bold items-center "
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <LiaGripfire className="w-6 h-6" />
            Farhan Nazir
          </Link>
          <ul className="hidden sm:flex  shrink-0  items-center justify-center gap-x-4 text-[0.8rem] font-medium text-gray-950   ">
            {headerList.map((list) => (
              <motion.li
                key={list.name}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative "
              >
                <Link
                  className={clsx(
                    "flex items-center justify-center p-2  hover:text-yellow-900   transition",
                    { "text-yellow-900": activeSection === list.name }
                  )}
                  href={list.link}
                  onClick={() => {
                    setActiveSection(list.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {list.name === "Source" && (
                    <BiLogoGithub className="w-6 h-6" />
                  )}
                  {list.name}

                  {list.name === activeSection && (
                    <motion.span
                      className="bg-yellow-400 rounded-xl absolute inset-0 -z-10    "
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="flex  justify-end w-1/2 gap-x-2">
            <ThemeSwitch />
            <button className="sm:hidden rounded-md bg-white w-10 h-10 flex items-center justify-center">
              <RxHamburgerMenu />
            </button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
