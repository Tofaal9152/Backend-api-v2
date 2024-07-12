import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { User_Model } from '../models/user.js'
export const all_GET = async (req, res) => {

    const Users = await User_Model.find({})
    res.json({
        success: true,
        users: Users

    })
}
export const all_id_POST = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        await User_Model.create({
            name: name,
            email: email,
            password: hashedPassword
        })
        res.send({
            success: true
        });
    } catch (error) {
        res.status(500).send({ message: "Error creating user" })
    }

}
export const all_id_id_GET = async (req, res) => {
    try {
        const { id } = req.params
        const User = await User_Model.findById(id)
        res.json({
            success: true,
            User
        })

    } catch (error) {
        res.status(500).send({ message: "Error creating user" })
    }
}
export const all_id_id_PUT = async (req, res) => {
    try {
        const { id } = req.params
        const User = await User_Model.findById(id)
        res.json({
            success: true,
            message:"updated"
        })

    } catch (error) {
        res.status(500).send({ message: "Error updating user" })
    }
}
export const all_id_id_DELETE = async (req, res) => {
    try {
        const { id } = req.params
        const User = await User_Model.findById(id)
        res.json({
            success: true,
            message:"user deleted"
        })

    } catch (error) {
        res.status(500).send({ message: "Error deleting user" })
    }
}