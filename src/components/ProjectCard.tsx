"use client";

import { MagicCard } from "@/components/ui/magic-card";
import ShineBorder from "@/components/ui/shine-border";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Project } from "@/types/project";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Badge, Link } from "@radix-ui/themes";
import Image from "next/image";

const ProjectCard = (props: Project) => {
  const { isDarkMode } = useDarkMode();
  return (
    <MagicCard
      className="cursor-none rounded-lg dark:shadow-2xl w-[45%] max-sm:w-full h-[310px] border-none !bg-transparent"
      gradientColor={`${isDarkMode ? "#262626" : "#FFBB75"}`}
    >
      <ShineBorder
        className={`border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none`}
        color={["#ED9455", "#FFFBDA", "#FFBB70"]}
      >
        <div className="px-3 ">
          <Image src={props.logo} alt="project-logo" width={35} height={35} />
        </div>
        <div className="px-3 mt-4 !pointer-events-auto ">
          <Link
            href={props.link ? props.link : props.source}
            target="_blank"
            underline="none"
          >
            <h1
              className={`text-xl text-black cursor-none  dark:text-white font-bold tracking-tight text-start whitespace-nowrap ${bricolage_grotesque}`}
            >
              {props.title}
            </h1>
          </Link>
          <p
            className={`mt-2 text-sm dark:text-[#D1D5DB]  font-normal  ${montserrat}`}
          >
            {props.description}
          </p>
        </div>
        <div className="flex gap-1 px-3 mt-4 h-[46px] flex-wrap !pointer-events-auto">
          {props.techStack?.map((tech, idx) => (
            <Badge
              key={idx}
              color="gray"
              variant="outline"
              highContrast
              className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto ${bricolage_grotesque}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="px-3 mt-3 !pointer-events-auto  flex gap-1">
          {props.link && (
            <Link className="cursor-none" href={props.link} target="_blank">
              <Badge
                color="gray"
                variant="solid"
                highContrast
                className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}
              >
                <GlobeIcon width={11} height={11} /> Website
              </Badge>
            </Link>
          )}

          <Link className="cursor-none" href={props.source} target="_blank">
            <Badge
              color="gray"
              variant="solid"
              highContrast
              className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}
            >
              <GitHubLogoIcon width={11} height={11} /> Source
            </Badge>
          </Link>
        </div>
      </ShineBorder>
    </MagicCard>
  );
};

export default ProjectCard;
