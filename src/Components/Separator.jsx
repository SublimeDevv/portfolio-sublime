import React from "react";

const Separator = ({ my, mt }) => {
  return (
    <>
      <hr className={""+my+" "+mt+" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-100"} />
    </>
  );
};

export default Separator;
