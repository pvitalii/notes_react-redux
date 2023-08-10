import { Modal } from "./Modal";
import { Meta, StoryObj } from "@storybook/react";

type ModalType = typeof Modal;

const meta: Meta<ModalType> = {
  title: "Common/Modal",
  component: Modal,
}

export default meta;

export const DefaultModal: StoryObj<ModalType> = {
  args: {
    isOpened: true,
    children: <div className="py-4 px-6"><h1>MODAL</h1></div>
  }
}
