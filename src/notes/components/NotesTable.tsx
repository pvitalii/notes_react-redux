import { Table } from "../../common/components/Table";
import { Note } from "../../common/interfaces/note.interface";
import { NoteItem } from "./NoteItem";

export const NotesTable = ({ notes }: {notes: Note[]}) => {
  const notesTableHeaders = [
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
    <div className="flex items-center justify-end gap-2"><img src="./img/white_archive.svg" alt="archive" /><img src="./img/white_delete.svg" alt="delete" /></div>
  ];

  return (
    <Table tableHeaders={notesTableHeaders}>
      {
        notes.map((note) =>
          <NoteItem note={note} key={note.id}/>
        )
      }
    </Table>
  )
}