import { v2 as cloudinary } from 'cloudinary';
import ApiError from '../utils/ApiError';

  // Configuration
  cloudinary.config({ 
    cloud_name: 'kuldeepsingh', 
    api_key: '151698178935927', 
    api_secret: 'h4vB5MYV1zDieoazHyo8tGmRKBI'
});

const uploadOnCloud = async (filepath) => {

    try {
        if(!filepath)throw new ApiError(404, "File not found")
        
            const response = await cloudinary.uploader.upload(filepath,{resource_type: 'auto'})
        
            return response
    } catch (error) {
        console.error(err.message)
        throw new ApiError(500, "Error uploading files to cloud")
    }
}

export default uploadOnCloud