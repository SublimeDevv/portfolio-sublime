import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { Navbar, Card, Timeline, Profile, Aboutme, Separator, Title, StackCard } from "./Components";

import stacks from "./util/stacks.json";
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
        <div className="flex flex-col md:flex-row ml-16 mr-16 mb-10">
          <div className="flex-none md:mr-10 mb-4 md:mb-0">
            <img
              className="w-96 md:w-96 md:h-72 h-auto p-1 rounded-2xl"
              src="/juan.png"
              alt="Bordered avatar"
            />
          </div>

          <div className="flex-grow ml-4 justify-left">
            <h1 className="text-3xl font-bold mb-3">
              Niux Comercio electronico
            </h1>
            <a
              href="https://shots.so/"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              https://shots.so/
              <i className="ml-2 nf nf-fa-external_link"></i>
            </a>
            <h2 className="mt-3 text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups.
            </h2>
            <div className="mb-4 mt-3 flex flex-wrap gap-5 text-[40px] text-gray-300">
              {stacks.office.map((icon, index) => {
                const [iconName, iconClass] = Object.values(icon);
                const hoverColor = icon.color;
                const tooltipText = icon.name;

                return (
                  <a
                    key={index}
                    className={`tooltip hover:${hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={iconName}>{/* Icono */}</i>
                    <span className="tooltiptext">{tooltipText}</span>
                  </a>
                );
              })}
            </div>
            <button className="bg-blue-700 rounded-md font-normal w-36 h-7 text-xs justify-center">
              <i className="nf nf-fa-github mr-2"></i>Ver repositorio
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ml-16 mr-16 mb-10">
          <div className="order-2 md:order-1 flex-grow mr-4 justify-left">
            <h1 className="text-3xl font-bold mb-3">
              Niux Comercio electronico
            </h1>
            <a
              href="https://shots.so/"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              https://shots.so/
              <i className="ml-2 nf nf-fa-external_link"></i>
            </a>
            <h2 className="mt-3 text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups.
            </h2>
            <div className="mb-4 mt-3 flex flex-wrap gap-5 text-[40px] text-gray-300">
              {stacks.office.map((icon, index) => {
                const [iconName, iconClass] = Object.values(icon);
                const hoverColor = icon.color;
                const tooltipText = icon.name;

                return (
                  <a
                    key={index}
                    className={`tooltip hover:${hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={iconName}>{/* Icono */}</i>
                    <span className="tooltiptext">{tooltipText}</span>
                  </a>
                );
              })}
            </div>
            <button className="bg-blue-700 rounded-md font-normal w-36 h-7 text-xs justify-center">
              <i className="nf nf-fa-github mr-2"></i>Ver repositorio
            </button>
          </div>

          <div className="order-1 md:order-2 flex-none md:ml-10 mb-4 md:mb-0 ">
            <img
              className="w-96 md:w-96 md:h-72 h-auto p-1 rounded-2xl"
              src="/mockups/login_niux.jpg"
              alt="Bordered avatar"
            />
          </div>
        </div>

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
