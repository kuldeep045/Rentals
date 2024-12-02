import { User } from '../models/user.model.js';
import ApiResponse from '../utils/ApiResponse.js';
import { getOtp } from '../utils/Otpsend.js';
import { Otp } from '../models/otp.model.js';

export const CheckVerify = async (req, res, next) => {
    try {
        const {email} = req.body;
        

        if (!email) {
            return ApiResponse(404, 'No email provided', {}, false);
        }

        const user = await User.findOne({ email });
        

        if (!user) {
            return res.status(404).json(new ApiResponse(404, 'No such user exists', {}, false))
        }

        await Otp.findOneAndDelete({email})

        if(!user.verified){
            await getOtp(email)
        }
       

        next();
    } catch (error) {

        console.error(error)
        next(error)
    }
};
