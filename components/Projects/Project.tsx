"use client";

import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Target } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Travel Web site",
    description: "",
    image: "/travelwebsite.png",
    tag: ["All", "Frontend"],
    className: "w-[500px] h-[400px] object-cover rounded fill ",
    gitUrl: "https://github.com/islamVargun/TravelSite",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Travel Admin Paneli",
    description: "",
    image: "/traveladmin.png",
    tag: ["All", "Frontend"],
    className: "w-[500px] h-[400px] object-cover rounded",
    gitUrl: "https://github.com/islamVargun/TravelSiteAdmin",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Food Sitesi",
    description: "",
    image: "/foodsite.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/islamVargun/FoodSite",
    previewUrl: "https://yemeksepeti.netlify.app/",
  },
  {
    id: 4,
    title: "React ile Film Filtreleme ",
    description: " ",
    image: "/reactmovie.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/islamVargun/ReactMovieFilter",
    previewUrl: "https://reactmovieeee.netlify.app/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filtredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardvariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        className="text-center text-4xl text-mycolor-700 font-semibold
        mt-4 mb-8 lg:mt-8 lg:mb-12"
      >
        Projelerim
      </h2>

      <div
        className="text-white flex flex-row justify-center items-center
        gap-5 py-6"
      ></div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {filtredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardvariants}
            initial="initial"
            animate={isInview ? "animate" : "inital"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              description={project.description}
              gitUrl={project.gitUrl}
              image={project.image}
              previewUrl={project.previewUrl}
              title={project.title}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
