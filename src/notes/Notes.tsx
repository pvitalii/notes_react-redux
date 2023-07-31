import "./Notes.css";
import { CreateNoteModal } from "./components/create-note-modal/CreateNoteModal";
import { NotesTable } from "./components/notes-table/NotesTable";
import { StatTable } from "./components/stat-table/StatTable";
import { useGetNotes } from "../store/notes/notes.hooks";
import { ArchivedNotesModal } from "./components/archived-notes-modal/ArchivedNotesModal";

export const NotesPage = () => {
  const notes = useGetNotes();
  const activeNotes = notes.filter((note) => note.archived === false);
  
  return(
    <div className="container">
      <div>
        <NotesTable notes={activeNotes} />
        <div className="main-table-btn">
          <ArchivedNotesModal />
          <CreateNoteModal />
        </div>
      </div>
      <StatTable/>
    </div>
  )
}