import { connectToDB } from "@/db/db"
import Note from "@/models/notesModel"
import Link from "next/link"

export default async function AllNotes() {
  interface NoteTypes {
    id: string
    title: string
    content: string
  }
  connectToDB()
  const notes: NoteTypes[] = await Note.find()
  console.log(notes)
  return (
    <>
      <h2 className="text-2xl fond-bold mb-4">Notes</h2>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex items-center justify-between bg-gray-100 shadow-md rounded-md p-4 mb-4 cursor-pointer"
          >
            <span className="text-lg">{note.title}</span>
            <div className="space-x-2">
              <Link href={`edit/${note.id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
