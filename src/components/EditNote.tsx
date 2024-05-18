"use client"
import React, { useState } from "react"
import * as actions from "@/actions"

interface NoteEditProps {
  note: { _id: string; title: string; content: string }
}

export default function EditNoteForm({ note }: NoteEditProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  async function editNoteHandler(e: React.FormEvent) {
    e.preventDefault()
    actions.editNote(note._id, title, content)
  }
  return (
    <div className="my-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
      <form onSubmit={editNoteHandler}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" w-full p-2 border rounded-md"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
