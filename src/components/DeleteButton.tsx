"use client"
import React from "react"
import * as actions from "@/actions"

export default function DeleteButton({ children }: { children: string }) {
  console.log(children)
  return (
    <button
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
      onClick={() => actions.deleteNote(children)}
    >
      Delete
    </button>
  )
}
