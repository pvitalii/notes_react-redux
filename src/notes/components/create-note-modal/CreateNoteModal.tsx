import { useState } from "react";
import { Modal } from "../../../common/components/modal/Modal";
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { dateParse } from "../../../common/utils/date-parse";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";
import { ActionForm } from "../action-form/ActionForm";
import { ActionFormValues } from "../../../common/interfaces/action-form-values.interface";

export const CreateNoteModal = () => {
  const [isCreateOpened, setIsCreateOpened] = useState(false);
  const dispatch = useAppDispatch();
  const initialValues = {
    name: '',
    category: NOTE_CATEGORY.TASK,
    content: ''
  }

  const submitCreation = (values: ActionFormValues) => {
    dispatch(notesActions.addNote(
      {
        ...values,
        id: new Date().getTime(),
        created: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        dates: dateParse(values.content),
        archived: false
      }
    ))
  }

  return (
    <div>
      <button onClick={() => setIsCreateOpened(true)}>Create Note</button>
      <Modal isOpened={isCreateOpened} onClose={() => setIsCreateOpened(false)}>
        <ActionForm initialValues={initialValues} onSubmit={submitCreation} />
      </Modal>
    </div>
  )
}