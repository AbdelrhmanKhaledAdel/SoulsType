"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="p-1.5 border border-white rounded-md cursor-pointer"
    >
      {theme === "dark" ? <Sun/> : <Moon/>}
    </button>
  );
}