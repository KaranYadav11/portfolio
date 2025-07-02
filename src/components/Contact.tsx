"use client";

import React, { useEffect, useState } from "react";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";
import Title from "./ui/Title";
import { Link } from "@radix-ui/themes";
import { useDarkMode } from "@/hooks/useDarkMode";
import { SparklesText } from "./sparkles-text";
import { MagicCard } from "./ui/magic-card";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-white";
  const borderColor = isDarkMode ? "border-white/10" : "border-gray-200";

  return (
    <div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-8 pb-20">
      <Title title="Get in Touch" />
      <MagicCard
        className={`w-full max-w-2xl p-6 sm:p-5 flex flex-col items-center justify-center rounded-2xl dark:shadow-2xl mt-5 !bg-transparent border-none ${bgColor} ${borderColor} ${montserrat}`}
        gradientColor={`${isDarkMode ? "#262626" : "#FFBB75"}`}
      >
        <p
          className={`text-base sm:text-sm text-center ${textColor} leading-relaxed`}
        >
          Want to chat? Just shoot me an email at
        </p>

        <div className="mt-2 text-center">
          <Link
            href="mailto:111yadavkaran@gmail.com"
            className="inline-block cursor-pointer transition-all duration-300"
          >
            <SparklesText
              className={`text-xl cursor-none sm:text-lg mt-2 ${bricolage_grotesque}`}
            >
              111yadavkaran@gmail.com
            </SparklesText>
          </Link>
        </div>

        <p
          className={`mt-3 text-sm text-center text-gray-500 dark:text-gray-400 `}
        >
          I’ll respond whenever I can. I ignore all unsolicited messages.
        </p>
      </MagicCard>
    </div>
  );
};

export default Contact;
