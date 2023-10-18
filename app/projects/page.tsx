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
              alt="Picture of the author"
            />
            <div className="m-2 font-bold">Lyriverse</div>
            <p className="text-center text-sm mb-6">
              A straightforward and user-friendly RESTful lyrics API that
              operates seamlessly.
            </p>
          </Link>
          <a href="/">
            <Image
              className="rounded-xl"
              src="/lyriverse.png"
              width={230}
              height={128}
              alt="Picture of the author"
            />
          </a>
          <a href="/">
            <Image
              className="rounded-xl"
              src="/lyriverse.png"
              width={230}
              height={128}
              alt="Picture of the author"
            />
          </a>
          <a href="/">
            <Image
              className="rounded-xl"
              src="/lyriverse.png"
              width={230}
              height={128}
              alt="Picture of the author"
            />
          </a>
        </div>
      </Layout>
    </main>
  );
}
