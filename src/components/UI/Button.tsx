import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children?: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}

const Button: React.FC<BaseLayoutProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="py-2 px-8 bg-primaryBlue rounded-sm text-white font-semibold text-md outline-none"
    >
      {props.children}
    </button>
  );
};

export default Button;
