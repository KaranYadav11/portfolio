"use client";

import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { bricolage_grotesque } from "@/utils/fonts";

const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="w-full h-fit px-64  max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Projects" />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge
          color="gray"
          variant="solid"
          highContrast
          onClick={loadMoreProjects}
          className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}
        >
          <span>Load More</span>
          <span className="!ml-[-3px] mt-[1px]">
            <ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
          </span>
        </Badge>
      )}
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/airplane.png",
    title: "Fligt Booking API",
    description:
      "A microservices-based backend system for managing flight bookings. Emphasized scalable architecture and service communication.",
    techStack: [
      "Node",
      "Express",
      "MySQL",
      "Sequelize",
      "Docker",
      "RabbitMQ",
      "Nodemailer",
    ],
    source: "https://github.com/KaranYadav11/flight-booking-system",
  },
  {
    logo: "/bright.png",
    title: "Fintech Landing Page",
    description:
      "Developed a credit card payoff landing page using React and Tailwind CSS, inspired by modern fintech UI/UX principles.",
    techStack: ["React", "Tailwind CSS"],
    link: "https://bright-snowy.vercel.app/",
    source: "https://github.com/KaranYadav11/bright",
  },
];
