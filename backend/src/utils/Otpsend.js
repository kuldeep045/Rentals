import { generateOtp, sendOtp } from "./Otp.js"
import { Otp } from "../models/otp.model.js"



export const getOtp = async(email) => {
        const otp = generateOtp()

        if(!otp){
            console.error("failed to generate otp: ")
        }

        //store otp in db
        const storeOtp = await Otp.create(
            {
                otp,
                email,
                expiresAt: new Date(Date.now() + 5 * 60000)

            }
        )

        await storeOtp.save()

        await sendOtp(email, otp)
        .then((data) => console.log("Otp sent successfully", data))
        .catch((error) => console.log(error))
    
}