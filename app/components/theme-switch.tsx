"use client";
import { useTheme } from "next-themes";
import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      {theme === "dark" || resolvedTheme === "dark" ? (
        <button
          className=" rounded-md  bg-yellow-400 w-10 h-10 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={() => setTheme("light")}
        >
          <MdOutlineNightlight />{" "}
        </button>
      ) : (
        <button
          className=" rounded-md  bg-yellow-400 w-10 h-10 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={() => setTheme("dark")}
        >
          <MdOutlineLightMode />{" "}
        </button>
      )}
    </div>
  );
}
