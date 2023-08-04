import { useState } from "react";
import { Modal } from "../../common/components/Modal";
import { NotesTable } from "./NotesTable";
import { useGetNotes } from "../../store/notes/notes.hooks";

export const ArchivedNotesModal = () => {
  const [isArchivedOpened, setIsArchivedOpened] = useState(false);
  const notes = useGetNotes();
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      <button className="modal-btn" onClick={() => setIsArchivedOpened(true)}>Archived Notes</button>
      <Modal isOpened={isArchivedOpened} onClose={() => setIsArchivedOpened(false)}>
        <NotesTable notes={archivedNotes}/>
      </Modal>
    </div>
  )
}