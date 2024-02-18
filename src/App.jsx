import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import {
  Navbar,
  Card,
  Timeline,
  Profile,
  Aboutme,
  Separator,
  Title,
  StackCard,
  ProjectCard,
} from "./Components";

import projects from "./util/projects.json";

import { cardData, experiences, stackData } from "./data";

export default function App() {
  return (
    <main
      id="home"
      className="flex flex-col md:flex-row min-h-screen justify-center items-center p-4"
    >
      <section className="max-w-full md:max-w-7xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <Navbar />

        <div className="p-16">
          <Profile />

          <Separator my={"my-12"} />

          <Title text="Acerca de mí" />

          <Aboutme />

          <div id="experience" />
          <Separator my={"my-2"} mt={"mt-12"} />

          <Title additionalStyles="mt-10" />

          {/* { Timeline } */}
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((experience, index) => (
              <Timeline key={index} {...experience} />
            ))}
          </ol>
          <div id="skills" />
        </div>

        <Separator my={"my-2"} mt={"mt-[-20px]"} />
        <Title
          text="Habilidades y tecnologías"
          additionalStyles="mb-10 mt-10"
        />
        <div className="mt-10 mb-5 ml-16 mr-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 text-center gap-4">
          {cardData.map((data, index) => (
            <Card
              key={index}
              iconClass={data.iconClass}
              count={data.count}
              title={data.title}
            />
          ))}
        </div>

        {/* {Stacks} */}
        <div className="mb-10 ml-16 mr-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
          {stackData.map((data, index) => (
            <StackCard
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              icons={data.icons}
            />
          ))}
          <div id="projects" />
        </div>

        <Separator my={"my-2"} />

        <Title text="Proyectos" additionalStyles="mt-10 mb-10" />

        {/* {Projects} */}

        <div className="mt-16">
          {projects.map((project, index) => {
            const {
              name,
              description,
              github,
              technologies,
              website,
              pictures,
            } = project;
            return (
              <ProjectCard
                key={index}
                imageUrl={pictures}
                github={github}
                title={name}
                linkUrl={website}
                description={description}
                iconStack={technologies}
                reverse={index % 2 === 0}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
