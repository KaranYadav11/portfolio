"use client";

import { MagicCard } from "@/components/ui/magic-card";
import ShineBorder from "@/components/ui/shine-border";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Project } from "@/types/project";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Badge, Link } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const ProjectCard = (props: Project) => {
  const { isDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Animation variants
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 0,
      rotate: -180,
    },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const badgeVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 10,
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkButtonVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      x: 3,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-[45%] max-sm:w-full h-[310px]"
    >
      <MagicCard
        className="cursor-none rounded-lg dark:shadow-2xl w-full h-full border-none !bg-transparent"
        gradientColor={`${isDarkMode ? "#262626" : "#FFBB75"}`}
      >
        <ShineBorder
          className={`border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none overflow-hidden`}
          color={["#ED9455", "#FFFBDA", "#FFBB70"]}
        >
          {/* Animated background gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/20 dark:to-orange-900/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Logo */}
          <motion.div
            className="px-3 z-10"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.div
              whileHover={{
                filter: "drop-shadow(0 4px 8px rgba(237, 148, 85, 0.3))",
              }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={props.logo}
                alt="project-logo"
                width={35}
                height={35}
                className="rounded-md"
              />
            </motion.div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            className="px-3 mt-4 !pointer-events-auto z-10"
            variants={contentVariants}
          >
            <Link
              href={props.link ? props.link : props.source}
              target="_blank"
              underline="none"
            >
              <motion.h1
                className={`text-xl text-black cursor-none dark:text-white font-bold tracking-tight text-start whitespace-nowrap ${bricolage_grotesque}`}
                whileHover={{
                  color: isDarkMode ? "#FFBB70" : "#ED9455",
                  transition: { duration: 0.2 },
                }}
              >
                {props.title}
              </motion.h1>
            </Link>
            <motion.p
              className={`mt-2 text-sm dark:text-[#D1D5DB] font-normal ${montserrat}`}
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                transition: { duration: 0.3 },
              }}
            >
              {props.description}
            </motion.p>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            className="flex gap-1 px-3 mt-4 h-[46px] flex-wrap !pointer-events-auto z-10"
            variants={contentVariants}
          >
            {props.techStack?.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={badgeVariants}
                custom={idx}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  color="gray"
                  variant="outline"
                  highContrast
                  className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto transition-all duration-200 ${bricolage_grotesque}`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="px-3 mt-3 !pointer-events-auto flex gap-1 z-10"
            variants={contentVariants}
          >
            {props.link && (
              <motion.div
                variants={linkButtonVariants}
                custom={0}
                whileHover="hover"
                whileTap="tap"
              >
                <Link className="cursor-none" href={props.link} target="_blank">
                  <Badge
                    color="gray"
                    variant="solid"
                    highContrast
                    className={`text-[10px] py-[3px] dark:hover:bg-gray-300 transition-all duration-200 ${bricolage_grotesque}`}
                  >
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GlobeIcon width={11} height={11} />
                    </motion.div>
                    Website
                  </Badge>
                </Link>
              </motion.div>
            )}

            <motion.div
              variants={linkButtonVariants}
              custom={1}
              whileHover="hover"
              whileTap="tap"
            >
              <Link className="cursor-none" href={props.source} target="_blank">
                <Badge
                  color="gray"
                  variant="solid"
                  highContrast
                  className={`text-[10px] py-[3px] dark:hover:bg-gray-300 transition-all duration-200 ${bricolage_grotesque}`}
                >
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GitHubLogoIcon width={11} height={11} />
                  </motion.div>
                  Source
                </Badge>
              </Link>
            </motion.div>
          </motion.div>

          {/* Subtle shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: isHovered ? "100%" : "-100%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            style={{
              background: `linear-gradient(90deg, transparent, ${
                isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"
              }, transparent)`,
            }}
          />
        </ShineBorder>
      </MagicCard>
    </motion.div>
  );
};

export default ProjectCard;
