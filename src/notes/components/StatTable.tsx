import { Table } from "../../common/components/Table";
import { useGetNotes } from "../../store/notes/notes.hooks";
import { NOTE_CATEGORY } from "../../common/utils/note-category.enum";

export const StatTable = () => {
  const statTableHeaders = ['Note Category', 'Active', 'Archived'];
  const notes = useGetNotes();
  const statInfo = notes.map((note) => {
    return {
      category: note.category,
      archived: note.archived
    }
  });

  return (
    <Table tableHeaders={statTableHeaders}>
      {
        Object.values(NOTE_CATEGORY).map((category) =>
          <tr key={category}>
            <td className="flex items-center gap-2"><img src={`img/${category.replaceAll(/ /ig, '_')}.svg`} alt={category}/>{category}</td>
            <td>{statInfo.filter((info) => info.category === category && !info.archived).length}</td>
            <td>{statInfo.filter((info) => info.category === category && info.archived).length}</td>
          </tr>
        )
      }
    </Table>
  )
}