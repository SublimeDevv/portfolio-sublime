import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full h-20 bg-slate-800 rounded-lg">
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
      </nav>
    </>
  );
};

export default Navbar;
