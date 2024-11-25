import jwt from 'jsonwebtoken'
import ApiResponse from '../utils/ApiResponse.js'
import asynchandler from '../config/asyncHandler.js'

const authenticate = asynchandler( async function (req, res, next){
    try {
        const accessToken = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!accessToken)return new ApiResponse(404, "Access token not found", {}, false)
            
            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                  return res.status(401).json(new ApiResponse(401, "Invalid or expired access token"));
                }
                req.user = decoded;
                next();
              })

        

    

        next()
    } catch (error) {

        console.error("Err: ", error.message)
        next(error)

        
    }

})

export default authenticate