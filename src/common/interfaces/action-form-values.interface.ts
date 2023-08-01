import { NOTE_CATEGORY } from "../utils/note-category.enum";

export interface ActionFormValues {
  name: string;
  category: NOTE_CATEGORY;
  content: string;
}