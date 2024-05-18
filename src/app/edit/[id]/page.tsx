import React from "react"
import EditNoteForm from "@/components/EditNote"
import { connectToDB } from "@/db/db"
import Note from "@/models/notesModel"

export default async function EditNote({ params }: { params: { id: string } }) {
  connectToDB()
  const note = await Note.findById(params.id)
  return <EditNoteForm note={note} />
}
