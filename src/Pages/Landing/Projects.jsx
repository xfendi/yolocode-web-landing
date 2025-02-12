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
    <div className="flex flex-col gap-20">
      <div className="text-5xl sm:text-7xl text-white text-start">
        Discover Our Latest Projects
      </div>
      <div className="flex flex-col gap-10">
      {proje.map((project, index) => (
        <Project data={project} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
