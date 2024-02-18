import React from "react";

const Title = ({
  text = "Experiencia en desarrollo",
  fontSize = "text-4xl",
  additionalStyles = "",
}) => {
  const combinedStyles = `${fontSize} font-bold mb-4 text-center ${additionalStyles}`;

  return <h1 className={combinedStyles}>{text}</h1>;
};

export default Title;
