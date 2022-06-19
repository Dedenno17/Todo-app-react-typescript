import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface BaseLayout {
  children?: ReactNode;
  className: string;
}

const ModalOverlay: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 bg-gradient-to-b from-slate-800 to-transparent"></div>
  );
};

const ModalContent: React.FC<BaseLayout> = (props) => {
  const classes = `${props.className} fixed w-3/4 top-5 left-1/2 -translate-x-1/2 bg-slate-200 rounded-lg shadow-lg`;

  return <div className={classes}>{props.children}</div>;
};

const portal = document.getElementById("modal")!;

const Modal: React.FC<BaseLayout> = (props) => {
  return (
    <>
      {createPortal(<ModalOverlay></ModalOverlay>, portal)}
      {createPortal(
        <ModalContent className={props.className}>
          {props.children}
        </ModalContent>,
        portal
      )}
    </>
  );
};

export default Modal;