"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../components/section-heading";

import Layout from "../components/layout/project";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between w-full align-middle sm:px-24 px-10  pt-24  dark:text-white">
      <Layout>
        <SectionHeading>Personal Projects</SectionHeading>
      </Layout>
      <Layout delay={0.2}>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-6 ">
          <Link
            href="/projects/lyriverse"
            className="flex flex-col items-center w-[230px]"
          >
            <Image
              className="rounded-xl"
              src="/lyriverse.png"
              width={230}
              height={128}
              alt="thumbnail"
            />
            <div className="m-2 font-bold">Lyriverse</div>
            <p className="text-center text-sm mb-6">
              A straightforward and user-friendly RESTful lyrics API that
              operates seamlessly.
            </p>
          </Link>
          <Link
            href="/projects/lyrictune"
            className="flex flex-col items-center w-[230px]"
          >
            <Image
              className="rounded-xl"
              src="/LyricTuneYT.png"
              width={230}
              height={128}
              alt="thumbnail"
            />
            <div className="m-2 font-bold">LyricTuneYT</div>
            <p className="text-center text-sm mb-6">
              Browser extension that display the lyrics for the current YouTube
              videos you're watching
            </p>
          </Link>
        </div>
      </Layout>
    </main>
  );
}
