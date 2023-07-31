import { Table } from "../../../common/components/table/Table";
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { Note } from "../../../common/interfaces/note.interface";
import { EditNoteModal } from "../edit-note-modal/EditNoteModal";
import "./NotesTable.css"

export const NotesTable = ({ notes }: {notes: Note[]}) => {
  const notesTableHeaders = [
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
    <div className="icon-row"><img src="./img/white_archive.svg" alt="archive" /><img src="./img/white_delete.svg" alt="delete" /></div>
  ];
  const dispatch = useAppDispatch();

  const deleteNote = (noteId: number) => {
    dispatch(notesActions.deleteNote(noteId));
  }
  const archiveNote = (note: Note) => {
    dispatch(notesActions.editNote({ noteId: note.id, editedNote: { archived: !note.archived } }))
  }
  const isArchived = notes.find((note) => note.archived);

  return (
    <Table tableHeaders={notesTableHeaders}>
      {
        notes.map((note) =>
          <tr className={isArchived ? 'archived-table-content' : 'notes-table-content'}>
            <td><div className="name-row"><img src={`img/${note.category.replaceAll(/ /ig, '_')}.svg`} alt={note.category} />{note.name}</div></td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates}</td>
            <td>
              <div className="icon-row">
                <EditNoteModal note={note} />
                <button onClick={() => archiveNote(note)} className="icon-btn"><img src="img/grey_archive.svg" alt="archive" /></button>
                <button onClick={() => deleteNote(note.id)} className="icon-btn"><img src="img/grey_delete.svg" alt="delete" /></button>
              </div>
            </td>
          </tr>
        )
      }
    </Table>
  )
}