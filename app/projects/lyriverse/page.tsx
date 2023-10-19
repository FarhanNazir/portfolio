"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/app/components/layout/project";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between w-full align-middle md:px-24 px-10  pt-24  dark:text-white ">
      <section className="flex flex-col md:w-1/2 xl:w-1/4 gap-4">
        <Layout delay={0.1}>
          <h2>
            <Link
              className=" dark:text-yellow-300 text-blue-500 text-sm hover:underline"
              href="/projects"
            >
              Project
            </Link>
            <span className="text-sm"> {" > "} </span>
            <span className="font-bold">LyriVerse</span>
          </h2>
        </Layout>
        <Layout delay={0.2}>
          <p className="text-justify  indent-8">
            Lyriverse is a user-friendly RESTful API designed to provide song
            lyrics based on the song's title and the artist's name. It offers a
            straightforward and powerful solution for accessing lyrics
            effortlessly. To maintain and prevent abuse, there is a limit of 100
            requests per hour for each user.
          </p>
          <ul className="px-4 space-y-2 my-5">
            <li className="text-sm ">
              <span className="p-1 text-xs dark:bg-yellow-700 bg-blue-700 dark:text-yellow-300 text-blue-300 rounded-md font-semibold">
                WEBSITE
              </span>{" "}
              <Link
                className="underline dark:text-yellow-300 text-blue-500"
                href="https://lyriverse.vercel.app"
              >
                https://lyriverse.vercel.app
              </Link>
            </li>
            <li className="text-sm  ">
              <span className="p-1 text-xs dark:bg-yellow-700 bg-blue-700 dark:text-yellow-300 text-blue-300 rounded-md font-semibold">
                STACK
              </span>{" "}
              Next.js (App Router), TypeScript, Tailwind
            </li>
            <li className="text-sm  ">
              <span className="p-1 text-xs dark:bg-yellow-700 bg-blue-700 dark:text-yellow-300 text-blue-300 rounded-md font-semibold">
                SOURCE
              </span>{" "}
              <Link
                className="underline dark:text-yellow-300 text-blue-500"
                href="https://github.com/FarhanNazir/LyriVerse"
              >
                https://github.com/FarhanNazir/LyriVerse
              </Link>
            </li>
          </ul>
        </Layout>
      </section>
    </main>
  );
}
