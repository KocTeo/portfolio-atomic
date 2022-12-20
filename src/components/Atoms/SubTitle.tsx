import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="text-3xl text-white">{children}</h2>;
};

export default SubTitle;
