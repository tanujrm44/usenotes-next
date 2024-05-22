"use server"

import { connectToDB } from "@/db/db"
import Note from "@/models/notesModel"
import {redirect} from "next/navigation"

export async function editNote(id: string, title: string, content: string){
    await connectToDB()
    const note = await Note.findById(id.toString())
    note.title = title
    note.content= content
    await note.save()
    redirect("/")
}


export async function deleteNote(id: string){
    await connectToDB()
    const res = await Note.findByIdAndDelete(id.toString())
    console.log(res)
}

export async function addNote(title: string, content: string){
    connectToDB()
    const res = await Note.create({
      title,
      content,
    })
    console.log(res)
    redirect("/")
}