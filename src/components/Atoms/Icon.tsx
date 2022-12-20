import React from "react";

interface Props {
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<Props> = ({ SvgIcon }) => {
  return <SvgIcon className="w-24 h-24" />;
};

export default Icon;
