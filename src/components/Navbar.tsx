"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useDarkMode } from "@/hooks/useDarkMode";

const items = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/KaranYadav11",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/111-y-k/",
    external: true,
  },
  { id: "darkmode", label: "Theme", action: "toggle" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [mounted, setMounted] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = (item: (typeof items)[0]) => {
    if (item.action === "toggle") {
      toggleDarkMode();
    } else if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }

    setActiveItem(item.id);
    setTimeout(() => setActiveItem(""), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex cursor-none justify-center items-center fixed top-4 w-full z-40 px-4"
    >
      <motion.nav
        layout
        className={`select-none flex items-center gap-1 p-1 rounded-2xl transition-all duration-300 
          max-sm:rounded-xl max-sm:p-0.5 max-sm:gap-0.5
          ${
            isDarkMode
              ? "border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl shadow-black/20"
              : "border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-2xl shadow-gray-900/10"
          }
        `}
      >
        {items.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => handleClick(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative cursor-none px-5 py-2.5 text-sm font-medium flex items-center gap-2.5 rounded-xl group 
              transition-all duration-300 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-sm:gap-1.5 max-sm:rounded-lg
              ${
                activeItem === item.id
                  ? isDarkMode
                    ? "text-black"
                    : "text-white"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }
              ${
                !activeItem
                  ? isDarkMode
                    ? "hover:bg-white/10"
                    : "hover:bg-gray-100/80"
                  : ""
              }
            `}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeItem === item.id && (
              <motion.span
                layoutId="bubble"
                className={`absolute inset-0 z-0 rounded-xl max-sm:rounded-lg ${
                  isDarkMode ? "bg-white" : "bg-black"
                }`}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5,
                }}
              />
            )}
            <span className="relative z-10 cursor-none flex items-center gap-2.5 max-sm:gap-1.5">
              {item.id === "github" && (
                <GitHubLogoIcon className="w-4 cursor-none h-4 max-sm:w-3.5 max-sm:h-3.5 transition-transform duration-200 group-hover:scale-110" />
              )}
              {item.id === "linkedin" && (
                <LinkedInLogoIcon className="w-4 cursor-none h-4 max-sm:w-3.5 max-sm:h-3.5 transition-transform duration-200 group-hover:scale-110" />
              )}
              {item.id === "darkmode" && (
                <motion.div
                  key={isDarkMode ? "moon" : "sun"}
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="transition-transform cursor-none duration-200 group-hover:rotate-12"
                >
                  {isDarkMode ? (
                    <MoonIcon className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
                  ) : (
                    <SunIcon className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
                  )}
                </motion.div>
              )}
            </span>
          </motion.button>
        ))}
      </motion.nav>
    </motion.div>
  );
}
