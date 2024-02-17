import React, { useEffect, useState } from "react";
import icons from "./util/icons.json";
import info from "./util/info.json";
import stacks from './util/stacks.json'

export default function App() {
  const fullName = "Juan Diego Mendoza Gutiérrez";

  const [firstName, lastName] = fullName.split("Mendoza Gutiérrez");

  return (
    <main className="flex flex-col md:flex-row min-h-screen justify-center items-center p-4">
      <section className="max-w-full md:max-w-7xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        {/* <nav className="sticky top-0 z-50 w-full h-20 bg-slate-800 rounded-lg">
          <ul className="flex justify-center items-center h-full font-normal text-[20px]">
            <li className="mx-4 lg:mx-8">
              <a
                href="#home"
                className="text-gray-300 px-5 py-3 hover:bg-gray-700 hover:text-blue-500 rounded transition duration-300 ease-in-out"
              >
                Inicio
              </a>
            </li>
            <li className="mx-4 lg:mx-8">
              <a
                href="#about"
                className="text-gray-300 px-5 py-3 hover:bg-gray-700 hover:text-blue-500 rounded transition duration-300 ease-in-out"
              >
                Proyectos
              </a>
            </li>
            <li className="mx-4 lg:mx-8">
              <a
                href="#services"
                className="text-gray-300 px-5 py-3 hover:bg-gray-700 hover:text-blue-500 rounded transition duration-300 ease-in-out"
              >
                Habilidades
              </a>
            </li>
            <li className="mx-4 lg:mx-8">
              <a
                href="#contact"
                className="text-gray-300 px-5 py-3 hover:bg-gray-700 hover:text-blue-500 rounded transition duration-300 ease-in-out"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav> */}

        <div className="p-16">
          {/* aqui va lo que te estoy pidiendo */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <img
                className="w-60 h-60  p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/juan.png"
                alt="Bordered avatar"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center md:text-4xl font-bold mb-6">
                {firstName}
                <span className="text-blue-500"> Mendoza Gutiérrez</span>
              </h1>
              <div className="justify-center flex flex-wrap gap-8  text-[20px] md:text-[30px] text-gray-300">
                {icons.socialNetworks.map((icon, index) => (
                  <a
                    key={index}
                    href={Object.values(icon)[1]}
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={Object.values(icon)[0]}></i>
                  </a>
                ))}
              </div>
              <h1 className="mt-4 text-center">
                +2 años de experiencia. Desarrollador de software
                multiplataforma. De México, Cancún. 🇲🇽
              </h1>
            </div>
          </div>

          {/* {} */}

          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          {/* {seccion} */}
          <h1 className="text-4xl font-bold mb-4 text-center mt-10">
            Acerca de mí
          </h1>
          <p className="mb-4">{info.about}</p>

          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <h1 className="text-4xl font-bold mb-4 text-center mt-10">
            Experiencia en desarollo
          </h1>

          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Actualmente...
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="nf nf-md-dev_to text-2xl mr-2" /> Estudiante de
                ingeniería en software | UTC
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Sigo estudiando la carrera de ingeniería en software en la
                universidad tecnológica de Cancún. Actualmente estoy en el 5to
                cuatrimestre, y me encuentro aprendiendo sobre el desarrollo de
                aplicaciones web y móviles.
              </p>
              <a
                href="http://www.utcancun.edu.mx/desarrollo-de-software/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Saber más{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Septiembre - Diciembre 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="nf nf-md-shopping mr-2 text-2xl"></i>Desarollo de
                ecommerce | Niux
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Desarollo colaborativo de una tienda en línea como proyecto
                final de la materia de desarrollo de aplicaciones web orientada
                a servicios.
              </p>
            </li>

            <li className="ms-4 mb-10">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Mayo - Agosto 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="nf nf-md-wallet_travel mr-2 text-2xl" />
                Aplicación web para la gestión de lugares turísticos | UTuri
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Desarollo de una aplicación web para la gestión de lugares
                turísticos en la materia de desarrollo de aplicaciones web con
                el stack MERN.
              </p>
            </li>

            <li className="ms-4 mb-10">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Mayo 2021 - Julio 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="nf nf-md-robot mr-2 text-2xl" />
                Bot de administración para servidor de Discord de Godeik |
                GoScript
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Desarollo de un bot de administración para el servidor de
                Discord de GoScript, con el stack de discord.js y MongoDB.
              </p>
            </li>

            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Marzo 2020 - Enero 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="nf nf-md-discord mr-2 text-2xl" />
                Bot de propósito general para Discord | Jojoestar
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Desarollo de un bot de propósito general para servidores de
                Discord con temática de Jojo's Bizarre Adventures, con el stack
                de discord.js-light y MongoDB.
              </p>
            </li>
          </ol>
          {/* {} */}
        </div>

        <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

        <h1 className="text-4xl font-bold mb-10 text-center mt-10 ">
          Habilidades y tecnologías
        </h1>

        <div className="mb-5 ml-16 mr-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 text-center gap-4">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-dev-database"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">
              {"{ "+icons.databases.length+" }"} 
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Bases de datos
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-cod-terminal_linux"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">  {"{ "+icons.os.length+" }"} </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">
                Sistemas operativos
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-cod-tools"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">
              {"{ "+icons.tools.length+" }"} 
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">
                Herramientas de desarrollo
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-md-language_xaml"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">
              {"{ "+icons.languages.length+" }"} 
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">
                Lenguajes de programación
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-md-electron_framework"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">
              {"{ "+icons.frameworks.length+" }"} 
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">
                Frameworks de desarollo
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary text-7xl">
                  <i className="nf nf-md-microsoft_office"></i>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">
              {"{ "+icons.office.length+" }"} 
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">
                Herramientas de ofimática
              </h6>
            </div>
          </div>
        </div>

        {/* {Tech} */}
        <div className="mb-20 ml-16 mr-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
                    {stacks.frontend.map((icon, index) => {
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Stack de desarrollo Frontend
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Librerías, frameworks y lenguajes
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
                    {stacks.backend.map((icon, index) => {
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Stack de desarollo Backend
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Frameworks y lenguajes
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
                    {stacks.tools.map((icon, index) => {
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Stack de herramientas
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Editores de código, control de versiones, etc.
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
                    {stacks.os.map((icon, index) => {
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Sistemas operativos que domino
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Windows y distribuciones de Linux
              </h6>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
                    {stacks.databases.map((icon, index) => {
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Bases de datos que domino
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                SQL y NoSQL
              </h6>
            </div>  
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-16 px-3 lg:mb-0">
              <div className=" flex justify-center">
                <span className="text-primary text-7xl">
                  <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
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
                          <span className="tooltiptext">
                            {tooltipText}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                </span>
              </div>
              <h5 className="mb-2 font-bold text-primary">
                Herramientas de ofimática
              </h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50 justify-center">
                Paquetería de Microsoft 365
              </h6>
            </div>
          </div>
        </div>
        {/* {Tech} */}

       
      </section>
    </main>
  );
}
