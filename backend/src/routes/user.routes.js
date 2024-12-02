import authenticate from "../middlewares/Auth.middleware.js"
import express from "express"
import {userRegister, userLogin, logOutUser, sendRegData} from '../controllers/UserController.js'
import OtpAuth from '../middlewares/OtpAuth.middleware.js'
import { CheckVerify } from "../middlewares/Checkverify.middleware.js"
import { sendUserData, updateUser } from "../controllers/UserController.js"
import {upload} from '../middlewares/multer.middleware.js'


const userRoute = express.Router()


userRoute.route('/register').post(userRegister)
userRoute.route('/logout').get(authenticate, logOutUser),

userRoute.route('/checkLoggedIn').get(authenticate, sendUserData)
userRoute.route('/updateUser').post(authenticate,upload.single('profileImg'), updateUser)

userRoute.route('/login').post(CheckVerify,userLogin)
userRoute.route('/auth').post(OtpAuth, sendRegData)



export default userRoute