import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI)
        console.log(`Connection on DB: ${mongoose.connection.name}`)
    } catch(err) {
        console.error("Error connecting to the DB",err)
    }
}

export default connectionDB;