import mongoose, { Schema, Document } from "mongoose";

interface NoteDocument extends Document {
    title: string,
    content: string
}

const notesSchemas = new Schema({
    title: String,
    content: String
})

const Note = mongoose.models.Note || mongoose.model<NoteDocument>("Note", notesSchemas)

export default Note