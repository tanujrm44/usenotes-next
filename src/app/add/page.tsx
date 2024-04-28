import { connectToDB } from "@/db/db"
import Note from "@/models/notesModel"
import { redirect } from "next/navigation"
import React from "react"

export default function AddNote() {
  async function createNote(formData: FormData) {
    "use server"
    const title = formData.get("title")
    const content = formData.get("content")
    connectToDB()
    const res = await Note.create({
      title,
      content,
    })
    console.log(res)
    redirect("/")
  }
  return (
    <div className="my-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Note</h2>
      <form action={createNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className=" w-full p-2 border rounded-md"
        />
        <textarea
          name="content"
          placeholder="Content"
          className=" w-full p-2 border rounded-md"
          rows={4}
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 ">
          Add Note
        </button>
      </form>
    </div>
  )
}
