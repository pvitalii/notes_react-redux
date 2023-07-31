import { NOTE_CATEGORY } from "../utils/note-category.enum";

export type ActionFormProps = { [k: string]: FormDataEntryValue } & 
  {
    name: string;
    category: NOTE_CATEGORY;
    content: string;
  }