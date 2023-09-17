"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

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
          className=" rounded-md  bg-yellow-400 w-10 h-10 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={() => setTheme("dark")}
        >
          <BsSun />
        </button>
      ) : (
        <button
          className=" rounded-md dark:text-black bg-yellow-400 w-10 h-10 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={() => setTheme("light")}
        >
          <BsMoon />
        </button>
      )}
    </div>
  );
}
