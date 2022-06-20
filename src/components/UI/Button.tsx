import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children?: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
  className: string;
}

const Button: React.FC<BaseLayoutProps> = (props) => {
  const classes = `${props.className} flex justify-center items-center rounded-sm font-semibold text-md outline-none`;

  return (
    <button type={props.type} onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
