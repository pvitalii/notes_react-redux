import { Meta, StoryObj } from "@storybook/react";
import { ActionForm } from "./ActionForm";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";

type ActionFormType = typeof ActionForm;

const meta: Meta<ActionFormType> = {
  title: "Notes/ActionForm",
  component: ActionForm
}

export default meta;

export const CreateActionForm: StoryObj<ActionFormType> = {
  args: {
    initialValues: {
      name: '',
      category: NOTE_CATEGORY.TASK,
      content: ''
    }
  }
}

export const EditActionForm: StoryObj<ActionFormType> = {
  args: {
    initialValues: {
      name: 'Shopping List',
      category: NOTE_CATEGORY.IDEA,
      content: 'Tomatoes, bread'
    }
  }
}