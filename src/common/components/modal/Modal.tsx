import { ReactNode } from "react";

type modalProps = {
  isOpened: boolean,
  onClose: () => void,
  children: ReactNode,
}

export const Modal = (props: modalProps) => {
  return props.isOpened ? (
    <div className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40">
      <div className="bg-white mx-auto my-15% p-5 w-fit min-w-50% max-w-70%">
        <span className="text-gray-400 float-right text-3xl font-bold hover:text-black cursor-pointer" onClick={props.onClose}>&times;</span>
        {props.children}
      </div>
    </div>
  ) : null
}