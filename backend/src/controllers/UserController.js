import asyncHandler from '../config/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'
import validator from 'validator'
import {User} from '../models/user.model.js'
import uploadOnCloud from '../config/cloudinary.js'

import { getOtp } from '../utils/Otpsend.js'








const userRegister = asyncHandler( async (req, res) => {

    try {
        //receive data from user
        const {name, userName, email, password} = req.body
        
    
        //ensure ass data is given by user
        if(!name && !userName && !email && !password){
            return res.status(404).json(new ApiResponse(404, "All data necessary", {}, false))
            
        }
    
    
        //check for valid email
        if(!validator.isEmail(email)){
            return res.status(401).json(new ApiResponse(401, "Please enter a valid email id", {}, false))

            
        }
    
        
        //check for strong password
        if(!validator.isStrongPassword(password)){
            return res.status(400).json(new ApiResponse(400, "Please enter a Strong password", {}, false))

            
        }

        
        
        

    
    
        //check if user already exists
        const userExisted = await User.findOne({ $or: [{email},{userName}]})

        if(userExisted){
            return res.status(400).json(new ApiResponse(404, "User with same email or userName already existed", {}, false))
        }


        //TODO make otp validation

        await getOtp(email)
        

        

        //create user
        const user = await User.create(
            {
                userName: userName.toLowerCase(),
                email: email.toLowerCase(),
                password,
                name
            }
        )
    
        await user.save()

        
        return res.status(200).json(new ApiResponse(200, "User created successfully. veriy your OTP to login"))



        
    } catch (error) {
        console.error("Error registering the user: ", error.message)
        throw new ApiError(500, "Error registering the user")
    }



    
})

const sendRegData = asyncHandler(
    async(req, res) => {
        try {
            const {email} = req.body
            const message = req.message
            
            const createdUser = await User.findOne({email}).select('-password')

            if(!createdUser?.verified){
                
                return res.status(400).json(new ApiResponse(400, message, {}, false))
            }

            
            return res.status(200).json(new ApiResponse(200, 'Successfully verified user', createdUser))


            
        } catch (error) {
            console.error(error)
            throw new ApiError(500, "Error while verifying otp", error)
            
        }
}
)



const sendUserData =asyncHandler(async (req, res) =>{
    const user = req.user

    try {
        const data = await User.findById(user._id).select('-password -refreshToken')
    
        console.log(data)
        return res.status(200).json(new ApiResponse(200, "is logged in", {data, isLoggedIn: true}, true))
    } catch (error) {
        console.log(error.message)
    }    
})


const userLogin = asyncHandler( async(req, res) => {

    const {userName, email, password} = req.body
    //const message = req.message

    if(!userName && !email){
        throw new ApiError(404, "email or userName required")
    }

    
    const user = await User.findOne({$or:[{email}, {userName}]})

    if(!user){
        return res.status(404).json(new ApiResponse(404, "User not found", {}, false))
    }
   
    
    const isPasswordCorrect = await user.isPasswordCorrect(password)
    console.log(isPasswordCorrect)
    if(!isPasswordCorrect){
        throw new ApiError(401, "Invalid user credetials ")
    }
    
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")


    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);
    const options = {
        httpOnly : true,
        secure : false,
        domain: 'localhost',
        sameSite: "lax",
        expires: expireDate,
    }

    return res
    .status(200)
    .cookie("AccessToken", accessToken, options)
    .cookie("RefreshToken", refreshToken, options)
    .json(new ApiResponse(200, "user logged in successfully", {loggedInUser, accessToken, refreshToken}))


})

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId)
    
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        if(!accessToken || !refreshToken){
            throw new ApiError(500, "process failed while generating access or refreshToken ")
        }

        user.refreshToken = refreshToken
        user.save({validateBeforeSave: false})
    
        return {
            accessToken, 
            refreshToken
        }
    } catch (error) {
        console.error("ERR: ", error.message)
        throw new ApiError(500, "failed to generate tokens")
    }

}

const logOutUser = asyncHandler( async(req, res) =>{
    const user = req.user

    
    return res
    .clearCookie("AccessToken")
    .clearCookie("RefreshToken")
    .json(new ApiResponse(200, "user LoggedOut successful", {}))
    
})


const updateUser = asyncHandler(async(req, res) => {
    let url = ''
    const user = req.user
    const {name, email, address, phone} = req.body
    const profileImg = req.file
    

    if(!user){
        return res.status(400).json(new ApiError(400, "user not provided"))
    }

    if(profileImg){
        const response = await uploadOnCloud(profileImg.path)
        url = response.url
    }
    console.log("url", url)
    

    

        
    

    const newData = {
        name,
        email,
        address,
        phone,
        profileImg: url
    }
try {
    
        const userData = await User.findByIdAndUpdate(user?._id, {$set: newData}, {new: true, runValidators: true}).select('-password -refreshToken')
    
        return res.status(200).json(new ApiResponse(200, "User Updated successfully", userData, true))
} catch (error) {
    console.error(error)
}

})


export {
    userRegister,
    sendRegData,
    userLogin,
    logOutUser,
    sendUserData,
    updateUser
}