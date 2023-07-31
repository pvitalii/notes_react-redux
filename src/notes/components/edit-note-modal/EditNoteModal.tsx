import { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from "../../../common/components/modal/Modal"
import { Note } from "../../../common/interfaces/note.interface";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";
import { useAppDispatch } from "../../../store/hooks";
import { notesActions } from "../../../store/notes/notes.slice";
import { ActionFormProps } from "../../../common/types/action-form-props.type";
import { dateParse } from "../../../common/utils/date-parse";

export const EditNoteModal = ({note} : {note: Note}) => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [inputState, setInputState] = useState(
    {
      name: note.name,
      content: note.content
    }
  )
  const dispatch = useAppDispatch();

  const handleInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(
      {
        ...inputState,
        [event.target.name]: event.target.value
      }
    )
  }
  const submitEdition = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData) as ActionFormProps;
    dispatch(notesActions.editNote(
      {
        noteId: note.id,
        editedNote: {
          ...formProps,
          dates: dateParse(formProps.content)
        },
      }
    ))
  }
  
  return (
    <div>
      <button className="icon-btn" onClick={() => setIsEditOpened(true)}><img src="img/edit.svg" alt="edit" /></button>
      <Modal isOpened={isEditOpened} onClose={() => setIsEditOpened(false)}>
        <form onSubmit={submitEdition} className="action-form">
          <input type="text" placeholder="Name" name="name" value={inputState.name} onChange={handleInputs}/>
          <select name="category" defaultValue={note.category}>
            {
              Object.values(NOTE_CATEGORY).map((category) => 
                <option value={category}>{category}</option>
              )
            }
          </select>
          <input type="text" placeholder="Content" name="content" value={inputState.content} onChange={handleInputs} />
          <button type="submit">Edit Note</button>
        </form>
      </Modal>
    </div>
  )
}