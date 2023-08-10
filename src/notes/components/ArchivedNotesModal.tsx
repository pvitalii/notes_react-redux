import { useState } from "react";
import { Modal } from "../../common/components/modal/Modal";
import { NotesTable } from "./NotesTable";
import { useGetNotes } from "../../store/notes/notes.hooks";
import { Button } from "../../common/components/button/Button";

export const ArchivedNotesModal = () => {
  const [isArchivedOpened, setIsArchivedOpened] = useState(false);
  const notes = useGetNotes();
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      <Button onClick={() => setIsArchivedOpened(true)}>Archived Notes</Button>
      <Modal isOpened={isArchivedOpened} onClose={() => setIsArchivedOpened(false)}>
        <NotesTable notes={archivedNotes}/>
      </Modal>
    </div>
  )
}