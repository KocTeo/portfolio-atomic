import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-gray-300 text-black font-bold py-2 px-4 border-b-4 border-gray-500 hover:bg-transparent hover:border-none hover:text-white rounded h-12 w-44 text-xl">
      {text}
    </button>
  );
};

export default Button;
