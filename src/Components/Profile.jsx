import React from "react";
import icons from "../util/icons.json";

const Profile = () => {
  const fullName = "Juan Diego Mendoza Gutiérrez";

  const [firstName, lastName] = fullName.split("Mendoza Gutiérrez");

  return (
    <>
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
            +2 años de experiencia. Desarrollador de software multiplataforma.
            De México, Cancún. 🇲🇽
          </h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
