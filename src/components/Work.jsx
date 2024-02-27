import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Frontend developer",
    duration: "4 years",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
  {
    year: 2020,
    title: "Alternateeve",
    duration: "4 years",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
  {
    year: 2019,
    title: "Alternateeve",
    duration: "3 months",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
  {
    year: 2018,
    title: "HIER Ankilizato",
    duration: "1 month",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
  {
    year: 2018,
    title: "DREN Menabe",
    duration: "3 months",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
  {
    year: 2017,
    title: "AD2M",
    duration: "3 months",
    details:
      "Conception et Intégration des pages sur l’Application Ressource humaine avec ReactJS, Conception et réalisation d’une application web hellostaff avec laravel,Jquery",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, id) => (
        <WorkItem
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
