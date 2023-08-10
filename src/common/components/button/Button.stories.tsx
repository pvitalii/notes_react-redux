import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

type ButtonType = typeof Button;

const meta: Meta<ButtonType> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: 'centered'
  }
}

export default meta;

export const DefaultButton: StoryObj<ButtonType> = {
  args: {
    children: "Button"
  }
}