import mongoose from "mongoose";


type ConnectionObject={
    isConnected?:number
}

const connection :ConnectionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected)
    {
        console.log("database already connected")
        return 
    }

    try {
        const db=await mongoose.connect(process.env.MONGO_DB_URI || "")
        connection.isConnected=db.connections[0].readyState
        console.log("successfully connected")
    } catch (error) {
        console.log("connection failed",error)
        process.exit()
    }
}

export default dbConnect