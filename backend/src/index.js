import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/mongodb.js'

const port = process.env.PORT || 4000


//connect to db
connectDB()
.then(
    () => {
        app.listen(port, () => {

            console.log(`Your server is listening on port ${port}`)})
})
.catch((err) => {
    console.error("Error starting the server: ", err.message)
})







