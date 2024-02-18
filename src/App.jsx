import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
    <main className="flex flex-col md:flex-row min-h-screen justify-center items-center p-4">
      <section className="max-w-full md:max-w-7xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <Navbar />

        <div className="p-16">
          <Profile />

          <Separator my={"my-12"} />

          <Title text="Acerca de mí" />

          <Aboutme />

          <Separator my={"my-2"} mt={"mt-12"} />

          <Title additionalStyles="mt-10" />

          {/* {Linea del tiempo } */}
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((experience, index) => (
              <Timeline key={index} {...experience} />
            ))}
          </ol>
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
        <div className="mb-20 ml-16 mr-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
          {stackData.map((data, index) => (
            <StackCard
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              icons={data.icons}
            />
          ))}
        </div>

        <Separator my={"my-2"} />

        <Title text="Proyectos" additionalStyles="mt-10" />

        {/* {Projects} */}

        {projects.map((project, index) => {
          const { name, description, github, technologies, website, pictures } =
            project;
          return (
            <ProjectCard
              key={index}
              imageUrl={pictures}
              title={name}
              linkUrl={website}
              description={description}
              iconStack={technologies}
              reverse={index % 2 === 0}
            />
          );
        })}

        {/* <div className="mr-16 ml-16 w-full h-96 pr-32 mb-10">
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
          
      </Swiper>
        </div> */}
      </section>
    </main>
  );
}
