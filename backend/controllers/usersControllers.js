import User from "../models/UserModel.js"
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

// @desc GET all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler( async (req, res) => {
    const users = await User.find().select("-password").lean()
    if(!users?.length) {
        return res.status(404).json({ message:"Not users found"})
    }
    res.json(users)
})

// @desc GET one user
// @route GET /users/:id
// @access Private
const getUserById = asyncHandler(async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id).select("-password").lean().exec()
    if(!user) {
        return res.status(404).json({ message:"Not user found"})
    }
    res.json(user)
})


// @desc Create new user
// @route POST /user
// @access Private
const createNewUser = asyncHandler( async (req , res) => {
    const { firstName, lastName, email, password, sections, role } = req.body
    if(!firstName || !lastName || !email || !password || !sections || role) {
        return res.status(400).json({ message:"All fields are required"})
    }

    const duplicate = await User.findOne({ email }).collation({ locale:"es", strength:2 }).lean().exec()
    if(duplicate) {
        return res.status(409).json({ message:"Duplicate email user already registered" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userObject = {
        firstName,
        lastName,
        email,
        role: role,
        password: hashedPassword,
        sections: sections,
        certificate: {}
    }

    // Create and store new user
    const newUser = await User.create(userObject);
    if(newUser) {
        res.status(201).json({ message:`User created ${userObject.email}`})
    } else {
        res.status(400).json({ message:"Invalid user data received"})
    }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) =>{ 
    const { id, firstName, lastName, email, password } = req.body
    if( !id || !firstName || !lastName || !email || !password) {
        return res.status(400).json({ message:"All fields are required" })
    }

    const user = await User.findById(id).exec()
    if(!user) {
        return res.status(404).json({ message:"User not found" })
    }

    const duplicate = await User.findOne({ mail }).collation({ locale:"es", strength:2 }).lean().exec()
    if(duplicate && duplicate?._id.toString() !== id){
        res.status(400).json({ message:"Duplicate email already registered" })
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;

    if(password) {
        user.password = await bcrypt.hash(password, 10)
    }

    const updatedUser = await user.save();

    res.json({ message:`User ${updatedUser.email} was updated`})
})

// @desc delete user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body;
    if(!id) {
        return res.status(400).json({ message:"User ID required" })
    }

    const user = await User.findById(id).exec()
    if(!user) {
        return res.status(400).json({ message:"User not found" })
    }

    await User.deleteOne({"_id":id})
    res.json({ message:`Usuario ${user.email} fue eliminado correctamente`})
})

export {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
};