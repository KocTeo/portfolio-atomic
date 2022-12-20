import React from "react";
import SubTitle from "../Atoms/SubTitle";
import Title from "../Atoms/Title";

const HeroText: React.FC = () => {
  return (
    <div className="h-1/2 w-full flex md:h-5/6 flex-col justify-center flex-wrap content-center">
      <div className="h-32 w-10/12 md:w-auto">
        <Title>Olá, Sou o Alexandre</Title>
        <SubTitle>Front-end | Back-end | FullStack</SubTitle>
      </div>
      <p className="text-white text-xl w-10/12 md:text-2xl md:w-2/6 md:mt-10 h-28">
        “Programadores e artistas são os únicos profissionais que tem como hobby
        a própria profissão.” - Rafael Lain
      </p>
    </div>
  );
};

export default HeroText;
