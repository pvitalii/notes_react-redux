import { ReactNode } from "react";
import "./Modal.css";

type modalProps = {
  isOpened: boolean,
  onClose: () => void,
  children: ReactNode,
}

export const Modal = (props: modalProps) => {
  return props.isOpened ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        {props.children}
      </div>
    </div>
  ) : null
}