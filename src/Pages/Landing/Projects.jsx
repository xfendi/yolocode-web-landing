import React from "react";
import Project from "../../Components/Project";

const proje = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dignissim nunc. In non lectus ut justo tincidunt tempor.",
    image: "project1.png",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dignissim nunc. In non lectus ut justo tincidunt tempor.",
    image: "project2.png",
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dignissim nunc. In non lectus ut justo tincidunt tempor.",
    image: "project3.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="projects"
    >
      <div className="flex flex-col gap-10 items-center" data-aos="fade-up">
        <div className="bg-neutral-900 p-2 px-4 text-sm rounded-full w-max">
          Our Projects
        </div>
        <div className="text-5xl sm:text-6xl text-white text-center">
          <span className="text-blue-400">Meet</span> our latest projects.
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full" data-aos="fade-up">
        {proje.map((project, index) => (
          <Project data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
