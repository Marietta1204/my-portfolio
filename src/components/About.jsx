import React from "react";
import AboutItem from "./AboutItem";
import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  mui,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

const data = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        About
      </h1>
      <p className="text-center py-8">
        These are the technologies I've worked with
      </p>

      <div className="flex flex-col">
        <div className="flex flex-wrap gap-20">
          {data.map((item, id) => (
            <div className="relative transition duration-250 perspective-500 w-20 h-20">
              <div className="absolute inset-0 z-[-1] w-full h-full transition duration-250 transform-style-preserve-3d transform origin-bottom-right rotate-15 will-change-transform shadow-right rounded-xl" />
              <AboutItem key={id} name={item.name} imageUrl={item.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
