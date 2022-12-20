import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <h1 className="text-5xl text-white font-bold">{children}</h1>;
};

export default Title;
