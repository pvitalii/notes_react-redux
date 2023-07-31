import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NOTE_CATEGORY } from "../../common/utils/note-category.enum";
import { Note } from "../../common/interfaces/note.interface";

const initialNotes: Note[] = [
  {
    id: 1,
    created: 'April 20, 2021',
    name: 'Shopping List',
    category: NOTE_CATEGORY.TASK,
    content: 'Tomatoes, bread',
    dates: '',
    archived: false
  },
  {
    id: 2,
    created: 'April 27, 2021',
    name: 'The theory of evolution',
    category: NOTE_CATEGORY.RANDOM_THOUGHT,
    content: 'The theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles DarwinThe theory of evolution by natural selection was conceived independently by Charles Darwin',
    dates: '',
    archived: false
  },
  {
    id: 3,
    created: 'May 03, 2021',
    name: 'New Feature',
    category: NOTE_CATEGORY.IDEA,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false
  },
  {
    id: 4,
    created: 'May 07, 2021',
    name: 'William Gaddis',
    category: NOTE_CATEGORY.RANDOM_THOUGHT,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false
  },
  {
    id: 5,
    created: 'May 15, 2021',
    name: 'Books',
    category: NOTE_CATEGORY.TASK,
    content: 'The Lean Startup',
    dates: '',
    archived: false
  },
  {
    id: 6,
    created: 'May 03, 2021',
    name: 'New Feature',
    category: NOTE_CATEGORY.IDEA,
    content: 'Implement new feature until 5/5/2021',
    dates: '5/5/2021',
    archived: false
  },
  {
    id: 7,
    created: 'May 07, 2021',
    name: 'William Gaddis',
    category: NOTE_CATEGORY.RANDOM_THOUGHT,
    content: 'Power doesn`t corrupt people, people corrupt power',
    dates: '',
    archived: false
  }
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: initialNotes
  },
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },
    
    editNote(state, action: PayloadAction<{ noteId: number, editedNote: Partial<Note> }>) {
      const indexToEdit = state.notes.findIndex((note) => note.id === action.payload.noteId);
      state.notes.splice(indexToEdit, 1, { ...state.notes[indexToEdit], ...action.payload.editedNote })
    },

    deleteNote(state, action: PayloadAction<number>) {
      const indexToDelete = state.notes.findIndex((note) => note.id === action.payload);
      state.notes.splice(indexToDelete, 1);
    }
  }
});

export const notesActions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;