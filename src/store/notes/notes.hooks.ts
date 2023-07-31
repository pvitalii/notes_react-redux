import { useAppSelector } from "../hooks";

export const useGetNotes = () => useAppSelector(state => state.notes);