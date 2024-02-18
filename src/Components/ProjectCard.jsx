import { useState } from "react";
import Modal from "./Modal";

export const ProjectCard = ({
  imageUrl,
  title,
  linkUrl,
  description,
  iconStack,
  reverse,
}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <div className="flex flex-col md:flex-row ml-16 mr-16 mb-10">
      <div
        className={`flex-none mb-4 md:mb-0 ${
          reverse ? "md:order-2 md:ml-10" : "md:mr-10"
        }`}
      >
        <img
          className="w-96 md:w-96 md:h-72 h-auto p-1 rounded-2xl"
          src={"/mockups/"+imageUrl[0]}
          alt="Project avatar"
          onClick={toggleModal}
        />
      </div>

      <div className="flex-grow ml-4 md:ml-0">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <a
          href={linkUrl}
          className="text-blue-500 hover:underline inline-flex items-center"
        >
          {linkUrl}
          <i className="ml-2 nf nf-fa-external_link"></i>
        </a>
        <h2 className="mt-3 text-gray-500 dark:text-gray-400">{description}</h2>
        <div className="mb-4 mt-3 flex flex-wrap gap-5 text-[40px] text-gray-300">
          {iconStack.map((icon, index) => (
            <a
              key={index}
              className={`tooltip hover:${icon.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={Object.values(icon)[0]}></i>
              <span className="tooltiptext">{icon.name}</span>
            </a>
          ))}
        </div>
        <button className="bg-blue-700 rounded-md font-normal w-36 h-7 text-xs justify-center">
          <i className="nf nf-fa-github mr-2"></i>Ver repositorio
        </button>
        <Modal isOpen={modalOpen} onClose={toggleModal} images={imageUrl} />
      </div>
    </div>
  );
};
