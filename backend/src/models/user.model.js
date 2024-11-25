import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const addressSchema = new mongoose.Schema({
    addressLine1: {
        type: String,
        trim: true,
    },
    addressLine2: {
        type: String,
        trim: true,
    },
});

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: [addressSchema],
        },
        image: {
            type: String, //link from cloudinary
        },
        refreshToken: {
            type: String
        },
        verified:{
            type:Boolean,
            default:false
        }
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            name : this.name,
            userName : this.userName,
            email : this.email,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN}
    )

}

userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN}
    )

}

export const User = mongoose.model('User', userSchema);
