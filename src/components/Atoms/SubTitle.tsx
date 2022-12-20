import React from "react";

interface Props {
  subtitle: string;
}

const SubTitle: React.FC<Props> = ({ subtitle }) => {
  return <h2 className="text-3xl text-white">{subtitle}</h2>;
};

export default SubTitle;
