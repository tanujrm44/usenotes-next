import mongoose from "mongoose"

let isConnected: Boolean = false

export const connectToDB = async (): Promise<void> => {
    if(isConnected) {
        console.log("MongoDb is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        isConnected = true
        console.log("MongoDB Connected")
    } catch (error: any) {
        console.log(error)
    }
}