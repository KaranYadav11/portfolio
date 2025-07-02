"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";
import { useDarkMode } from "@/hooks/useDarkMode";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  console.log("Footer rendered with isDarkMode:", isDarkMode);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const heartVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const nameVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const dotVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const sparkleVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const backgroundColor = isDarkMode ? "bg-black/95" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const borderColor = isDarkMode ? "border-gray-800/50" : "border-gray-300";

  return (
    <footer
      className={`relative ${backgroundColor} ${textColor} ${borderColor} backdrop-blur-sm border-t overflow-hidden`}
    >
      {/* Glow Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
          <div className="relative w-40 h-6">
            <div className="absolute inset-0 rounded-full animate-glow-1" />
            <div className="absolute inset-0 rounded-full animate-glow-2" />
            <div className="absolute inset-0 rounded-full animate-glow-3" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-1 {
          0%,
          100% {
            box-shadow: 0 0 40px 12px rgba(237, 148, 85, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 50px 16px rgba(237, 148, 85, 0.6);
            transform: scale(1.1);
          }
        }
        @keyframes glow-2 {
          0%,
          100% {
            box-shadow: 0 0 35px 10px rgba(255, 251, 218, 0.3);
            transform: scale(0.95);
          }
          50% {
            box-shadow: 0 0 45px 14px rgba(255, 251, 218, 0.5);
            transform: scale(1);
          }
        }
        @keyframes glow-3 {
          0%,
          100% {
            box-shadow: 0 0 30px 8px rgba(255, 187, 112, 0.25);
            transform: scale(0.9);
          }
          50% {
            box-shadow: 0 0 40px 12px rgba(255, 187, 112, 0.45);
            transform: scale(1);
          }
        }

        .animate-glow-1 {
          animation: glow-1 5s ease-in-out infinite;
        }
        .animate-glow-2 {
          animation: glow-2 6s ease-in-out infinite 1s;
        }
        .animate-glow-3 {
          animation: glow-3 7s ease-in-out infinite 2s;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-8">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center space-x-2 text-sm font-medium"
            variants={itemVariants}
          >
            <motion.span
              className={`${bricolage_grotesque} ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crafted with
            </motion.span>

            <motion.span
              className="text-red-400"
              variants={heartVariants}
              initial="initial"
              animate="animate"
            >
              ❤️
            </motion.span>

            <motion.span
              className={`${bricolage_grotesque} ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              by
            </motion.span>

            <motion.span
              className={`${bricolage_grotesque} cursor-none ${
                isDarkMode ? "text-white" : "text-black"
              } font-semibold`}
              variants={nameVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              Karan Yadav
            </motion.span>
          </motion.div>

          <motion.div
            className={`flex items-center space-x-4 text-xs ${
              isDarkMode ? "text-gray-500" : "text-gray-700"
            } ${montserrat}`}
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-1.5"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-green-400 rounded-full"
                variants={dotVariants}
                initial="initial"
                animate="animate"
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Always learning
              </motion.span>
            </motion.div>

            <motion.div
              className={`w-px h-3 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-400"
              }`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />

            <motion.div
              className="flex items-center space-x-1.5"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
              >
                ✨
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Building the future
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
