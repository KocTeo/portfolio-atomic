import React from "react";

interface Props {
  placeholder: string;
  type: string;
  value?: string;
  onchange?: (e: any) => void;
}

const Input: React.FC<Props> = ({ placeholder, type, value, onchange }) => {
  {
    return type === "text" ? (
      <input
        type="text"
        placeholder={placeholder}
        className={
          "mt-0 block w-5/12 px-0.5 border-0 border-b-2 focus:ring-0 focus:border-white bg-gray-900 text-gray-400 p-3 pl-2 text-lg"
        }
        value={value}
        onChange={onchange}
      />
    ) : (
      <textarea
        className={
          "mt-0 block w-full px-0.5 border-0 border-b-2 focus:ring-0 focus:border-white bg-gray-900 text-gray-400 p-3 pl-2"
        }
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    );
  }
};

export default Input;
