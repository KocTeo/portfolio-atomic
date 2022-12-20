import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-gray-300 text-black font-bold py-2 px-4  hover:bg-transparent hover:border-none hover:text-white rounded h-12 w-44 text-xl">
      {children}
    </button>
  );
};

export default Button;
