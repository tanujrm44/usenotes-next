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