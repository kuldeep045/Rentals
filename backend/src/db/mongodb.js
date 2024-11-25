import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
import ApiError from '../utils/ApiError.js'


async function connectDB(){

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("connected to database connection host : ", connectionInstance.connection.host)
        
    } catch (error) {
        console.error(err.message)
        throw new ApiError(500, `ERROR CONNECTING TO DATABASE: ${error.message}`)
    }
}

export default connectDB