import { CreateNoteModal } from "./components/CreateNoteModal";
import { NotesTable } from "./components/NotesTable";
import { StatTable } from "./components/StatTable";
import { useGetNotes } from "../store/notes/notes.hooks";
import { ArchivedNotesModal } from "./components/ArchivedNotesModal";

export const NotesPage = () => {
  const notes = useGetNotes();
  const activeNotes = notes.filter((note) => note.archived === false);
  
  return(
    <div className="flex flex-col py-4 px-8 gap-12 my-0 mx-auto">
      <div>
        <NotesTable notes={activeNotes} />
        <div className="flex mt-4 justify-between">
          <ArchivedNotesModal />
          <CreateNoteModal />
        </div>
      </div>
      <StatTable/>
    </div>
  )
}