import { Provider } from "react-redux";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";
import { NoteItem } from "./NoteItem";
import { Meta, StoryObj } from "@storybook/react";
import { store } from "../../../store";

type NoteItemType = typeof NoteItem;

const meta: Meta<NoteItemType> = {
  title: "Notes/NoteItem",
  component: NoteItem,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>)
  ],
  parameters: {
    layout: 'centered'
  }
}

export default meta;

export const ActiveNoteItem: StoryObj<NoteItemType> = {
  args: {
    note: {
      name: 'The theory of evolution',
      category: NOTE_CATEGORY.RANDOM_THOUGHT,
      archived: false,
      content: 'The theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles Darwin',
      created: 'April 27, 2021',
      dates: '',
      id: 1
    }
  }
}

export const ArchivedNoteItem: StoryObj<NoteItemType> = {
  args: {
    note: {
      name: 'The theory of evolution',
      category: NOTE_CATEGORY.RANDOM_THOUGHT,
      archived: true,
      content: 'The theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles Darwin',
      created: 'April 27, 2021',
      dates: '',
      id: 1
    }
  }
}