"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { HiOutlineSun } from "react-icons/hi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "light" ? (
        <button
          className=" rounded-md  bg-yellow-400 w-10 h-10 flex items-center justify-center "
          onClick={() => setTheme("dark")}
        >
          <BsSun className="w-[18px] h-[18px]" />
        </button>
      ) : (
        <button
          className=" rounded-md dark:text-black bg-yellow-400 w-10 h-10 flex items-center justify-center "
          onClick={() => setTheme("light")}
        >
          <MdDarkMode className="w-6 h-6 fill-gray-900" />
        </button>
      )}
    </div>
  );
}
