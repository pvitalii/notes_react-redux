import { NOTE_CATEGORY } from "../utils/note-category.enum";

export interface Note {
  id: number;
  created: string;
  name: string;
  category: NOTE_CATEGORY;
  content: string;
  dates: string;
  archived: boolean
}