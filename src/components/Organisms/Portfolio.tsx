import React from "react";
import Title from "../Atoms/Title";
import PortfolioCard from "../Molecules/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="w-full h-auto mt-36 flex justify-center">
      <div className="w-3/4">
        <Title>PROJETOS</Title>
        <div>
          <PortfolioCard
            title="Projeto 1"
            subtitle="Descrição do projeto 1"
            img="/images/hero_image.jpg"
          />

          <PortfolioCard
            title="Projeto 2"
            subtitle="Descrição do projeto 2"
            img="/images/hero_image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
