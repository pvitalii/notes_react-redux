import { useState } from "react";
import { Modal } from "../../../common/components/modal/Modal"
import { Note } from "../../../common/interfaces/note.interface";
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { dateParse } from "../../../common/utils/date-parse";
import { ActionForm } from "../action-form/ActionForm";
import { ActionFormValues } from "../../../common/interfaces/action-form-values.interface";

export const EditNoteModal = ({ note }: { note: Note }) => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const dispatch = useAppDispatch();
  const initialValues = {
    name: note.name,
    category: note.category,
    content: note.content
  }

  const submitEdition = (values: ActionFormValues) => {
    dispatch(notesActions.editNote(
      {
        noteId: note.id,
        editedNote: {
          ...values,
          dates: dateParse(values.content)
        },
      }
    ))
  }

  return (
    <div>
      <button className="icon-btn" onClick={() => setIsEditOpened(true)}><img src="img/edit.svg" alt="edit" /></button>
      <Modal isOpened={isEditOpened} onClose={() => setIsEditOpened(false)}>
        <ActionForm initialValues={initialValues} onSubmit={submitEdition} />
      </Modal>
    </div>
  )
}