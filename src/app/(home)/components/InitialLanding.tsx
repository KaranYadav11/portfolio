"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ProjectCardList from "@/components/ProjectCardList";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function InitialLanding() {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full flex justify-center mt-24 max-sm:mt-20"
        >
          <ProjectCardList />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
