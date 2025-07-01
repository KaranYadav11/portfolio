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

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const handleClick = (item: (typeof items)[0]) => {
    if (item.action === "toggle") {
      toggleDarkMode();
      setActiveItem(item.id);
      // Reset active state after animation
      setTimeout(() => setActiveItem(""), 600);
    } else if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      setActiveItem(item.id);
      // Reset active state after animation
      setTimeout(() => setActiveItem(""), 600);
    }
  };

  return (
    <div className="flex cursor-none justify-center items-center fixed top-4 w-full z-40 px-4">
      <nav
        className={` cursor-none
          select-none flex items-center gap-1 p-1 rounded-2xl transition-all duration-300 
          max-sm:rounded-xl max-sm:p-0.5 max-sm:gap-0.5
          ${
            isDarkMode
              ? "border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl shadow-black/20"
              : "border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-2xl shadow-gray-900/10"
          }
        `}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`cursor-none
              relative px-5 py-2.5 text-sm font-medium transition-all duration-300 
              flex items-center gap-2.5 rounded-xl group
              max-sm:px-3 max-sm:py-2 max-sm:text-xs max-sm:gap-1.5 max-sm:rounded-lg
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
                className={`
                  absolute inset-0 z-0 rounded-xl max-sm:rounded-lg
                  ${isDarkMode ? "bg-white" : "bg-black"}
                `}
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2.5 max-sm:gap-1.5">
              {item.id === "github" && (
                <GitHubLogoIcon
                  className={`
                    w-4 h-4 max-sm:w-3.5 max-sm:h-3.5 transition-transform duration-200 
                    ${activeItem !== item.id ? "group-hover:scale-110" : ""}
                  `}
                />
              )}
              {item.id === "linkedin" && (
                <LinkedInLogoIcon
                  className={`
                    w-4 h-4 max-sm:w-3.5 max-sm:h-3.5 transition-transform duration-200 
                    ${activeItem !== item.id ? "group-hover:scale-110" : ""}
                  `}
                />
              )}
              {item.id === "darkmode" && (
                <div className="transition-transform duration-200 group-hover:rotate-12">
                  {isDarkMode ? (
                    <MoonIcon className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
                  ) : (
                    <SunIcon className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
                  )}
                </div>
              )}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
