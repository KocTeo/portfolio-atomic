import { Nest, Node, Prisma, Sql } from "public/svgs/index";
import React from "react";
import Icon from "../Atoms/Icon";
import SubTitle from "../Atoms/SubTitle";

const BackSkills: React.FC = () => {
  const icons = [Nest, Node, Prisma, Sql];
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <SubTitle>BACK-END</SubTitle>
      <div className="w-80 flex flex-wrap justify-center content-center mt-6">
        {icons.map((icon, index) => (
          <div key={index} className="m-2">
            <Icon SvgIcon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackSkills;
