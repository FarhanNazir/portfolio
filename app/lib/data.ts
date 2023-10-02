import React from "react";
import { IconType } from "react-icons";
import { BiLogoGithub } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

type HeaderList = {
  name: string;
  link: string;
  icon?: IconType;
};
export const headerList: HeaderList[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Source",
    link: "https://github.com/FarhanNazir",
    icon: BiLogoGithub,
  },
];

export const experiencesData = [
  {
    title: "Foundation in Physical Science",
    location: "Center for Foundation Studies, IIUM",
    description: "Graduated with CGPA of 3.47",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2016",
  },
  {
    title: "Bachelor of Mathematical Science",
    location: "International Islamic University Malaysia",
    description:
      "Graduated with degree in Mathematical Science concentration in Financial Mathematics with Minor in Business with CGPA of 3.65",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Master of Science",
    location: "International Islamic University Malaysia",
    description: "",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "R",
  "RStudio",
  "Framer Motion",
] as const;
