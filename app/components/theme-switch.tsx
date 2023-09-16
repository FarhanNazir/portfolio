"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
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
