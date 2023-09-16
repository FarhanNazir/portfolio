"use client";
import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "../context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className=" rounded-md  bg-yellow-400 w-10 h-10 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
    </button>
  );
}
