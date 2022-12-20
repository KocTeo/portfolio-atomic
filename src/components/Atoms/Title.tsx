import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-white font-bold text-4xl md:text-5xl">{children}</h1>
  );
};

export default Title;
