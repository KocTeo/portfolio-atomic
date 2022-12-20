import React from "react";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return <h1 className="text-5xl text-white font-bold">{title}</h1>;
};

export default Title;