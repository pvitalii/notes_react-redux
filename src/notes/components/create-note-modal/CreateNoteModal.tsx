import { FormEvent, useState } from "react";
import { Modal } from "../../../common/components/modal/Modal";
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { dateParse } from "../../../common/utils/date-parse";
import { ActionFormProps } from "../../../common/types/action-form-props.type";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";

export const CreateNoteModal = () => {
  const [isCreateOpened, setIsCreateOpened] = useState(false);
  const dispatch = useAppDispatch();
  
  const submitCreation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData) as ActionFormProps;
    dispatch(notesActions.addNote(
      {
        ...formProps,
        id: new Date().getTime(),
        created: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        dates: dateParse(formProps.content),
        archived: false
      }
    ))
  }
  
  return (
    <div>
      <button onClick={() => setIsCreateOpened(true)}>Create Note</button>
      <Modal isOpened={isCreateOpened} onClose={() => setIsCreateOpened(false)}>
        <form onSubmit={submitCreation} className="action-form">
          <input type="text" placeholder="Name" name="name" />
          <select name="category">
            {
              Object.values(NOTE_CATEGORY).map((category) =>
                <option value={category}>{category}</option>
              )
            }
          </select>
          <input type="text" placeholder="Content" name="content" />
          <button type="submit">Create Note</button>
        </form>
      </Modal>
    </div>
  )
}