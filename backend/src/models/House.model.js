import mongoose,{Schema} from 'mongoose'


const houseSchema = new Schema(
    {
        name: {
            type:String,
            required:true

        },
        Owner:{
            type:ObjectId,
            ref:User,
            required: true

        },
        Price:{
            type:Number,
            required: true
        },
        status:{

        },
        numBeds:{
            type :String //range 
        },
        numBath:{
            type:String //range

        },
        area:{
            type: Number,
            required:true
        },
        image:{
                    type:String, //cloudinary link
                    required: true
                }
            ,
        address:{
            address1:{
                type:String,
                required: true
            },
            address2:{
            type:String,
            required: true
            }
        },
        available:{
            type:Boolean,
            required: true
        }
    }
)


export const House = mongoose.model("House", houseSchema)