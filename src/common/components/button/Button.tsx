import { ButtonHTMLAttributes } from "react";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: buttonProps) => {
  return (
    <button type={props.type} className="py-2 px-2 border-1 border-solid border-black bg-gray-100" onClick={props.onClick}>{props.children}</button>
  )
}