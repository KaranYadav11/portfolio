"use client";
import React from "react";
import { motion } from "framer-motion";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
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
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      className="relative bg-black/95 backdrop-blur-sm text-white border-t border-gray-800/50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-20px",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 py-8">
        {/* Main content - matches your site's centered layout */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-3"
          variants={containerVariants}
        >
          {/* Heart animation container - more subtle to match your design */}
          <motion.div
            className="flex items-center space-x-2 text-sm font-medium"
            variants={itemVariants}
          >
            <motion.span
              className={`${bricolage_grotesque} text-gray-400`}
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
              className={`${bricolage_grotesque} text-gray-400`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              by
            </motion.span>

            <motion.span
              className={`${bricolage_grotesque} cursor-none text-white font-semibold `}
              variants={nameVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              Karan Yadav
            </motion.span>
          </motion.div>

          {/* Status indicators - matches your site's style */}
          <motion.div
            className={`flex items-center space-x-4 text-xs text-gray-500 ${montserrat}`}
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
              className="w-px h-3 bg-gray-700"
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
    </motion.footer>
  );
};

export default Footer;
