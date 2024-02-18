export const Card = ({ iconClass, count, title }) => (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="relative mb-12 px-3 lg:mb-0">
      <div className="mb-2 flex justify-center">
        <span className="text-primary text-7xl">
          <i className={iconClass}></i>
        </span>
      </div>
      <h5 className="mb-6 font-bold text-primary">{"{ " + count + " }"}</h5>
      <h6 className="mb-0 font-normal dark:text-neutral-50">{title}</h6>
    </div>
  </div>
);
