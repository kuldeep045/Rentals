import crypto from 'crypto'
import dotenv from 'dotenv'
import { Otp } from '../models/otp.model.js'
import ApiResponse from './ApiResponse.js'
import ApiError from './ApiError.js'
import nodemailer from 'nodemailer'
import { User } from '../models/user.model.js'
dotenv.config()


const generateOtp = () => {
    return crypto.randomInt(100000, 999999).toString()
}

const sendOtp =  async (email, otp) => {
    const transporter = nodemailer.createTransport({        
        service: 'gmail',
        auth: {
        user: process.env.My_EMAIL,
        pass: process.env.MY_PASS,
        },
    });


    try {
        const data = await transporter.sendMail(
            {
                from: '"Rentals" <cooldeepus52@gmail.com>',
                to: email,
                subject: 'Your Otp',
                text: `Your otp is ${otp}. Valid for  5 minutes`
            }
        )

        console.log('otp sent successfully')
        return data

    } catch (error) {
        console.error('Error sending otp', error.message)
    }
}


const verifyOtp = async (email, otp) => {
    const dbOtp = await Otp.findOne({email, otp})
    

    if(!dbOtp){
        return new ApiResponse(400, "Invalid otp", {}, false)
    }

    if(dbOtp.expiresAt < Date.now()){
        return new ApiError(400, "Otp expired", {}, false)
    }

    const user = await User.findOneAndUpdate({email}, {
        verified: true
    })
    await user?.save()

    await dbOtp.deleteOne()



    return new ApiResponse(200, "Otp verified")

}



export {
    sendOtp,
    generateOtp,
    verifyOtp
}