export const Card = ({ iconClass, count, title }) => (
  <div className="max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">
    <div className="relative mb-12 px-3 lg:mb-0">
      <div className="mb-2 flex justify-center">
        <span className="text-primary text-7xl">
          <i className={iconClass}></i>
        </span>
      </div>
      <h5 className="mb-6 font-bold text-primary">{"{ " + count + " }"}</h5>
      <h6 className="mb-0 font-normal text-neutral-50">{title}</h6>
    </div>
  </div>
);
