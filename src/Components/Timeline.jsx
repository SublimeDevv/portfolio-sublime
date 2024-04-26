export const Timeline = ({ time, title, description, link, iconName }) => (
  <li className="mb-5 ms-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-500">
      {time}
    </time>
    <h3 className="text-lg font-semibold text-white">
      <i className={`${iconName} text-2xl mr-2`} /> {title}
    </h3>
    <p className="mb-4 text-base font-normal  text-gray-400">
      {description}
    </p>
    {link && (
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 text-sm font-medium  border  rounded-lg  hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700"
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
    )}
  </li>
);
