import { Note } from "../../../common/interfaces/note.interface"
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { EditNoteModal } from "../EditNoteModal";

export const NoteItem = ({ note }: { note: Note }) => {
  const dispatch = useAppDispatch();

  const deleteNote = (noteId: number) => {
    dispatch(notesActions.deleteNote(noteId));
  }
  const archiveNote = (note: Note) => {
    dispatch(notesActions.editNote({ noteId: note.id, editedNote: { archived: !note.archived } }))
  }

  return (
    <tr className={note.archived ? '[&>td]:whitespace-nowrap [&>td]:max-w-xs [&>td]:overflow-hidden [&>td]:text-ellipsis' : '[&>td]:max-w-3xl [&>td]:break-all'}>
      <td><div className="flex items-center gap-2"><img src={`img/${note.category.replaceAll(/ /ig, '_')}.svg`} alt={note.category} />{note.name}</div></td>
      <td>{note.created}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td>
        <div className="flex items-center gap-2 justify-end">
          <EditNoteModal note={note} />
          <button onClick={() => archiveNote(note)}><img src="img/grey_archive.svg" alt="archive" /></button>
          <button onClick={() => deleteNote(note.id)}><img src="img/grey_delete.svg" alt="delete" /></button>
        </div>
      </td>
    </tr>
  )
}