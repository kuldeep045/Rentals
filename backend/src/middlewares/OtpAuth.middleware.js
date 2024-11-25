import asynchandler from "../config/asyncHandler.js";
import { verifyOtp } from "../utils/Otp.js";

const OtpAuth = asynchandler(async (req, res, next) => {
    try {
        const {email, otp} = req.body
        const response = await verifyOtp(email, otp)
        console.log('res', response)

        const message = response.message

        req.message = message
        

        next()
    
    } catch (error) {
        next(error)
    }

}
)


export default OtpAuth