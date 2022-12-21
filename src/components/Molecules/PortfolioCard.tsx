import React from "react";
import SubTitle from "../Atoms/SubTitle";
import Title from "../Atoms/Title";

type Props = {
  title: string;
  subtitle: string;
  img: string;
};

const PortfolioCard: React.FC<Props> = ({ title, subtitle, img }) => {
  return (
    <div className="w-full h-full flex flex-col mt-28">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-3/5 w-9/12 bg-cover absolute -z-20"
      />
      <div className="mt-96">
        <div className="bg-black opacity-70 h-1/5 w-9/12 absolute -z-10" />
        <div className="ml-12 mt-10">
          <Title>{title}</Title>
          <br />
          <SubTitle>{subtitle}</SubTitle>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
