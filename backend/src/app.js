import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()





const app = express()

//for form data
app.use(express.json({limit: "20kb"}))


//url encoded data
app.use(express.urlencoded({extended:true, limit: '20kb'}))  

//serve static files
app.use(express.static("public"))


//for cross origin resource sharing
app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


//cookie parser
app.use(cookieParser())



import  userRoute  from './routes/user.routes.js'



//routing
app.use('/api/v1/users', userRoute)



export default app
