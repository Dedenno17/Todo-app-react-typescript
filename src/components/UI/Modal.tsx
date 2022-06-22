import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch } from "../../app/hooks";

import { showEditActions } from "../../features/isShowEdit";

interface BaseLayout {
  children?: ReactNode;
  className: string;
}

const ModalOverlay: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-slate-800 to-transparent"
      onClick={() => dispatch(showEditActions.setCloseEdit())}
    />
  );
};

const ModalContent: React.FC<BaseLayout> = (props) => {
  const classes = `${props.className} fixed w-3/4 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg lg:w-1/2`;

  return <div className={classes}>{props.children}</div>;
};

const portal = document.getElementById("modal")!;

const Modal: React.FC<BaseLayout> = (props) => {
  return (
    <>
      {createPortal(<ModalOverlay />, portal)}
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
