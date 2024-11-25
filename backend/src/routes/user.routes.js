import authenticate from "../middlewares/Auth.middleware.js"
import express from "express"
import {userRegister, userLogin, logOutUser, sendRegData} from '../controllers/UserController.js'
import OtpAuth from '../middlewares/OtpAuth.middleware.js'


const userRoute = express.Router()


userRoute.route('/register').post(userRegister)
userRoute.route('/login').post(userLogin)
userRoute.route('/logout').get(authenticate, logOutUser)
userRoute.route('/auth').post(OtpAuth, sendRegData)



export default userRoute