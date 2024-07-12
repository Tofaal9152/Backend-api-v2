import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
export const User_Model = mongoose.model('User_Info', User_Schema);
