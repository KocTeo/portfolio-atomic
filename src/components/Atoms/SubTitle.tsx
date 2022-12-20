import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="text-white text-lg md:text-3xl">{children}</h2>;
};

export default SubTitle;
