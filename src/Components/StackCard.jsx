import { Icon } from "./Icon";

export const StackCard = ({ title, subtitle, icons }) => (
  <div className="max-w-sm p-6  rounded-lg shadow bg-gray-800 border-gray-700">
    <div className="relative mb-16 px-3 lg:mb-0">
      <div className="flex justify-center">
        <span className="text-primary text-7xl">
          <div className="mb-4 justify-center flex flex-wrap gap-5 text-[40px] text-gray-300">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                icon={Object.values(icon)[0]}
                hoverColor={icon.color}
                tooltipText={icon.name}
              />
            ))}
          </div>
        </span>
      </div>
      <h5 className="mb-2 font-bold text-primary">{title}</h5>
      <h6 className="mb-0 font-normal text-neutral-50 justify-center">
        {subtitle}
      </h6>
    </div>
  </div>
);
